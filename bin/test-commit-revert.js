#!/usr/bin/env node

import { tcr } from './tcr.js'

console.log('✅  test && ⏺  commit || ⏮  revert', process.argv)
process.exit(
  await tcr(console)
)
