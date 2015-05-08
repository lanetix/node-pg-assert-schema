#!/usr/bin/env node

'use strict';

var assertSchema = require('./index');
var yargs = require('yargs');

var opts = yargs
  .demand(1)
  .usage(
    'Usage: $0 [ -d database url ] <schema>\n' +
    'Asserts the existence of schema, creating it if necessary'
  )
  .option('d', {
    alias: 'database_url',
    type: 'string',
    default: process.env.DATABASE_URL,
    describe: 'database url (defaults to $DATABASE_URL)'
  })
  .help('h')
  .alias('h', 'help')
  .argv;

assertSchema(opts.database_url, opts._[0]);
