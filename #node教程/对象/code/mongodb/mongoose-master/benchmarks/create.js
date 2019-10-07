// require('nodetime').profile();

'use strict';

const mongoose = require('../../mongoose');
const fs = require('fs');

const Schema = mongoose.Schema;

const CheckItem = new Schema({
  name: {type: String},
  type: {type: String},
  pos: {type: Number}
});

const Checklist = new Schema({
  name: {type: String},
  checkItems: {type: [CheckItem]}
});

let Board = new Schema({
  checklists: {type: [Checklist]}
});

// var start1 = new Date();
Board = mongoose.model('Board', Board);
// var Cl = mongoose.model('Checklist', Checklist);
const doc = JSON.parse(fs.readFileSync(__dirname + '/bigboard.json'));
// var time1 = (new Date - start1);
// console.error('reading from disk and parsing JSON took %d ms', time1);

const start2 = new Date();
for (let i = 0; i < 1000; ++i) {
  new Board(doc);
}
const time2 = (new Date - start2);
console.error('creation of large object took %d ms', time2);
