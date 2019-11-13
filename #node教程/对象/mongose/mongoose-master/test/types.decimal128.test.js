'use strict';

/**
 * Module dependencies.
 */

let assert = require('power-assert'),
    start = require('./common'),
    mongoose = start.mongoose,
    Schema = mongoose.Schema;

/**
 * Test.
 */

describe('types.decimal128', function() {
  it('casts from type number (gh-6331)', function() {
    const dec128 = new Schema({
      value: Schema.Types.Decimal128
    });

    const BigNum = mongoose.model('gh6331', dec128);

    const big = new BigNum({ value: 10000 });

    assert.strictEqual(big.value.toString(), '10000');
  });

  it('uses valueOf method if one exists (gh-6418)', function() {
    const dec128 = new Schema({
      value: Schema.Types.Decimal128
    });

    const BigNum = mongoose.model('gh6418', dec128);

    const obj = {
      str: '10.123',
      valueOf: function() {
        return this.str;
      }
    };

    const big = new BigNum({ value: obj });

    assert.strictEqual(big.value.toString(), '10.123');
  });
});
