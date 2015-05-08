'use strict';

var pg = require('pg');
var sprintf = require('sprintf-js').sprintf;

module.exports = function (databaseUrl, schema) {
  pg.connect(databaseUrl, function (err, client, done) {
    if (err) {
      done();
      process.emit('error', err);
    }
    else {
      client.query(
        sprintf('CREATE SCHEMA IF NOT EXISTS "%s"', schema),
        function (e) {
          done();
          if (e) { process.emit('error', e); }
          pg.end();
        }
      );
    }
  });
};
