#!/usr/bin/env node

import { testOr, tryCommit } from './tcr.js'

const logger = console
const doNothing = () => undefined

logger.log('✅  test && ⏺  commit -- (no revert)', process.argv)
process.exit(
  await testOr({
    onSuccess: tryCommit(logger),
    onFailure: doNothing
  }, logger)
)
