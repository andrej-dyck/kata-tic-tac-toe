#!/usr/bin/env node

import { sleep } from './sleep.js'
import dayjs from 'dayjs'
import { silentExec } from './shell-exec.js'
import { tcr } from './tcr.js'

const logger = console

/* timebox argument */
const ensurePositiveNumber = (n) => n && Number(n) > 0 ? Number(n) : undefined
const timeboxMinutes = ensurePositiveNumber(process.argv[2]) ?? 5

/* git */
const head = async () => {
  const hash = silentExec('git show -s --format=%h HEAD')
  const timestamp = silentExec('git show -s --format=%ci HEAD')
  return { hash: await hash, timestamp: dayjs(await timestamp) }
}

const anyChanges = () =>
  silentExec('git status -s').then(output => output?.length > 0)

/* time */
const tickingLoop = async ({ intervalInSec }, tick) => {
  let passedSeconds = 0
  while (true) {
    const res = await tick(dayjs(), passedSeconds)

    if (res?.action === 'break') break
    if (res?.passedSeconds >= 0) passedSeconds = res.passedSeconds

    await sleep(intervalInSec, 'sec')
    passedSeconds += intervalInSec
  }
}

const relativeTime = (diffInSec) => {
  const rtf = new Intl.RelativeTimeFormat('en', { style: 'narrow' })
  return Math.abs(diffInSec) < 90
    ? rtf.format(diffInSec, 'seconds')
    : rtf.format(diffInSec / 60, 'minutes')
}

const every30Sec = (diff, action) => {
  if (diff > 0 && (diff % 30 === 0 || diff <= 15)) action()
}

/* log */
const secondsSinceLastCommit = (head, now, logger) => {
  const diffInSec = head.timestamp.diff(now, 'seconds')
  logger.log('☑  last commit', head.hash, relativeTime(diffInSec === 0 ? -diffInSec : diffInSec))
  return diffInSec
}

/* start script */
logger.log(`⏳  time-boxed ${timeboxMinutes} minutes`, process.argv)

const { hash: initialCommit } = await head()
logger.log('☑  starting with commit', initialCommit)

let previousCommit = initialCommit

/* main loop */
await tickingLoop({ intervalInSec: 5 }, async (now, passedSeconds) => {
    const lastCommit = await head()
    const secondsLeft = timeboxMinutes * 60 - passedSeconds

    /* output time progress */
    every30Sec(secondsLeft, () => {
      logger.log('tcr', relativeTime(secondsLeft))
    })

    /* was there a commit in the meantime? */
    if (lastCommit.hash !== previousCommit) {
      const secondsAgo = secondsSinceLastCommit(lastCommit, now, logger)
      previousCommit = lastCommit.hash
      return { passedSeconds: -secondsAgo }
    }

    /* times up? */
    if (secondsLeft <= 0) {
      logger.log('⌛  times up!')

      /* does it need to be reverted? */
      if (await anyChanges()) await tcr(logger)
      else logger.log('nothing changed; resetting timer ...')

      return { passedSeconds: 0 }
    }
  }
)
