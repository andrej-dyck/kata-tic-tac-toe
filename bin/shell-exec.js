import { exec } from 'node:child_process'
import { promisify } from 'node:util'

export const shellExec = (command, logger = console) => {
  const execution = exec(command)

  execution.stdout.on('data', (data) => logger.log(data))
  execution.stderr.on('data', (data) => logger.error(data))

  return new Promise((resolve, reject) => {
    execution.on('close', (code) => {
      code === 0 ? resolve({ code }) : reject({ code })
    })
  })
}

export const silentExec = async (command) => {
  const { stdout } = await promisify(exec)(command)
  return stdout.trim()
}
