#!/usr/bin/env node
import { testOrRevert } from './tcr.js'

const success = () => 0

console.log('✅  test && ⏺  commit || ⏮  revert', process.argv)
process.exit(
  await testOrRevert({ onSuccess: success }, console)
)
