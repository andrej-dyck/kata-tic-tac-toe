import { shellExec } from './shell-exec.js'

export const tcr = (logger) =>
  testOrRevert({ onSuccess: tryCommit(logger) }, logger)

export const testOrRevert = (
  { onSuccess },
  logger = console,
) => {
  const reset = async () => {
    await shellExec('git reset --hard HEAD && git clean -fd', logger)
    logger.log('⏮  hard reset\n')
  }

  return testOr({ onSuccess, onFailure: reset }, logger)
}

export const testOr = async (
  { onSuccess, onFailure },
  logger = console
) => {
  logger.log('⏳  running tests')
  return await shellExec('npm run test', logger)
    .then(async ({ code }) => {
      logger.log('✅  tests successful')

      return await onSuccess() ?? code
    })
    .catch(async ({ code }) => {
      logger.error('❌  tests failed')

      return await onFailure() ?? code
    })
}

export const tryCommit = (logger) => () => {
  logger.log('⏳  committing work...')

  return shellExec('git add . && git commit -m "it works" --no-verify', logger)
    .then(({ code }) => {
      logger.log('⏺  work committed')
      return code
    })
    .catch(({ code }) => {
      logger.error('❌  commit failed')
      return code
    })
}
