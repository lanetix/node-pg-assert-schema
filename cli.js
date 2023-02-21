#!/usr/bin/env node

'use strict'

const assertSchema = require('./index')
const yargs = require('yargs')

const opts = yargs
  .demand(1)
  .usage(
    'Usage: $0 [ -d database url ] <schema>\n' +
    'Asserts the existence of schema, creating it if necessary'
  )
  .option('d', {
    alias: 'database_url',
    type: 'string',
    describe: 'database url (overriden by $DATABASE_URL)'
  })
  .help('h')
  .alias('h', 'help')
  .argv

assertSchema(process.env.DATABASE_URL || opts.database_url, opts._[0])
