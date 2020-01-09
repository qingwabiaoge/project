'use strict';

/**
 * Module dependencies.
 */

const assert = require('assert');
const co = require('co');
const start = require('./common');

const mongoose = start.mongoose;

/**
 * Test.
 */

describe('Map', function() {
  let db;

  before(function() {
    db = start();
  });

  after(function(done) {
    db.close(done);
  });

  it('validation', function() {
    const nestedValidateCalls = [];
    const validateCalls = [];
    const TestSchema = new mongoose.Schema({
      v: {
        type: Map,
        of: {
          type: Number,
          validate: function(v) {
            nestedValidateCalls.push(v);
            return v < 4;
          }
        },
        validate: function(v) {
          validateCalls.push(v);
          return true;
        }
      }
    });

    const Test = db.model('MapTest', TestSchema);

    return co(function*() {
      const doc = yield Test.create({ v: { x: 1 } });
      assert.deepEqual(nestedValidateCalls, [1]);
      assert.equal(validateCalls.length, 1);
      assert.equal(validateCalls[0].get('x'), 1);

      assert.ok(doc.v instanceof Map);

      let threw = false;

      try {
        yield Test.create({ v: { notA: 'number' } });
      } catch (error) {
        threw = true;
        assert.ok(!error.errors['v']);
        assert.ok(error.errors['v.notA']);
      }
      assert.ok(threw);

      doc.v.set('y', 5);

      threw = false;
      try {
        yield doc.save();
      } catch (error) {
        threw = true;
        assert.ok(!error.errors['v']);
        assert.ok(error.errors['v.y']);
      }
      assert.ok(threw);
    });
  });

  it('deep set', function(done) {
    const userSchema = new mongoose.Schema({
      socialMediaHandles: {
        type: Map,
        of: String
      }
    });

    const User = db.model('MapDeepSet', userSchema);

    const user = new User({ socialMediaHandles: {} });

    user.set('socialMediaHandles.github', 'vkarpov15');

    assert.equal(user.socialMediaHandles.get('github'), 'vkarpov15');
    assert.equal(user.get('socialMediaHandles.github'), 'vkarpov15');

    done();
  });

  it('query casting', function() {
    const TestSchema = new mongoose.Schema({
      v: {
        type: Map,
        of: Number
      }
    });

    const Test = db.model('MapQueryTest', TestSchema);

    return co(function*() {
      const docs = yield Test.create([
        { v: { n: 1 } },
        { v: { n: 2 } }
      ]);

      let res = yield Test.find({ 'v.n': 1 });
      assert.equal(res.length, 1);

      res = yield Test.find({ v: { n: 2 } });
      assert.equal(res.length, 1);

      yield Test.updateOne({ _id: docs[1]._id }, { 'v.n': 3 });

      res = yield Test.find({ v: { n: 3 } });
      assert.equal(res.length, 1);

      let threw = false;
      try {
        yield Test.updateOne({ _id: docs[1]._id }, { 'v.n': 'not a number' });
      } catch (error) {
        threw = true;
        assert.equal(error.name, 'CastError');
      }
      assert.ok(threw);
      res = yield Test.find({ v: { n: 3 } });
      assert.equal(res.length, 1);
    });
  });

  it('defaults', function() {
    const TestSchema = new mongoose.Schema({
      n: Number,
      m: {
        type: Map,
        of: Number,
        default: { bacon: 2, eggs: 6 }
      }
    });

    const Test = db.model('MapDefaultsTest', TestSchema);

    return co(function*() {
      const doc = new Test({});
      assert.ok(doc.m instanceof Map);
      assert.deepEqual(Array.from(doc.toObject().m.keys()), ['bacon', 'eggs']);

      yield Test.updateOne({}, { n: 1 }, { upsert: true, setDefaultsOnInsert: true });

      const saved = yield Test.findOne({ n: 1 });
      assert.ok(saved);
      assert.deepEqual(Array.from(saved.toObject().m.keys()),
        ['bacon', 'eggs']);
    });
  });

  it('validation', function() {
    const TestSchema = new mongoose.Schema({
      ratings: {
        type: Map,
        of: {
          type: Number,
          min: 1,
          max: 10
        }
      }
    });

    const Test = db.model('MapValidationTest', TestSchema);

    return co(function*() {
      const doc = new Test({ ratings: { github: 11 } });
      assert.ok(doc.ratings instanceof Map);

      let threw = false;
      try {
        yield doc.save();
      } catch (err) {
        threw = true;
        assert.ok(err.errors['ratings.github']);
      }
      assert.ok(threw);

      doc.ratings.set('github', 8);
      // Shouldn't throw
      yield doc.save();

      threw = false;
      try {
        yield Test.updateOne({}, { $set: { 'ratings.github': 11 } }, {
          runValidators: true
        });
      } catch (err) {
        threw = true;
        assert.ok(err.errors['ratings.github']);
      }
      assert.ok(threw);
    });
  });

  it('with single nested subdocs', function() {
    const TestSchema = new mongoose.Schema({
      m: {
        type: Map,
        of: new mongoose.Schema({ n: Number }, { _id: false, id: false })
      }
    });

    const Test = db.model('MapEmbeddedTest', TestSchema);

    return co(function*() {
      let doc = new Test({ m: { bacon: { n: 2 } } });

      yield doc.save();

      assert.ok(doc.m instanceof Map);
      assert.deepEqual(doc.toObject().m.get('bacon').toObject(), { n: 2 });

      doc.m.get('bacon').n = 4;
      yield doc.save();
      assert.deepEqual(doc.toObject().m.get('bacon').toObject(), { n: 4 });

      doc = yield Test.findById(doc._id);

      assert.deepEqual(doc.toObject().m.get('bacon').toObject(), { n: 4 });
    });
  });

  describe('populate', function() {
    it('populate individual path', function() {
      const UserSchema = new mongoose.Schema({
        keys: {
          type: Map,
          of: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MapPopulateTest'
          }
        }
      });

      const KeySchema = new mongoose.Schema({ key: String });

      const User = db.model('MapPopulateTest_0', UserSchema);
      const Key = db.model('MapPopulateTest', KeySchema);

      return co(function*() {
        const key = yield Key.create({ key: 'abc123' });
        const key2 = yield Key.create({ key: 'key' });

        const doc = yield User.create({ keys: { github: key._id } });

        const populated = yield User.findById(doc).populate('keys.github');

        assert.equal(populated.keys.get('github').key, 'abc123');

        populated.keys.set('twitter', key2._id);

        yield populated.save();

        const rawDoc = yield User.collection.findOne({ _id: doc._id });
        assert.deepEqual(rawDoc.keys, { github: key._id, twitter: key2._id });
      });
    });

    it('populate entire map', function() {
      const UserSchema = new mongoose.Schema({
        apiKeys: {
          type: Map,
          of: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MapPopulateWildcardTest'
          }
        }
      });

      const KeySchema = new mongoose.Schema({ key: String });

      const User = db.model('MapPopulateWildcardTest_0', UserSchema);
      const Key = db.model('MapPopulateWildcardTest', KeySchema);

      return co(function*() {
        const key = yield Key.create({ key: 'abc123' });
        const key2 = yield Key.create({ key: 'key' });

        const doc = yield User.create({ apiKeys: { github: key._id, twitter: key2._id } });

        const populated = yield User.findById(doc).populate('apiKeys');

        assert.equal(populated.apiKeys.get('github').key, 'abc123');
        assert.equal(populated.apiKeys.get('twitter').key, 'key');
      });
    });

    it('populate entire map in doc', function() {
      const UserSchema = new mongoose.Schema({
        apiKeys: {
          type: Map,
          of: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MapPopulateMapDocTest'
          }
        }
      });

      const KeySchema = new mongoose.Schema({ key: String });

      const User = db.model('MapPopulateMapDocTest_0', UserSchema);
      const Key = db.model('MapPopulateMapDocTest', KeySchema);

      return co(function*() {
        const key = yield Key.create({ key: 'abc123' });
        const key2 = yield Key.create({ key: 'key' });

        const doc = yield User.create({ apiKeys: { github: key._id, twitter: key2._id } });

        const _doc = yield User.findById(doc);
        yield _doc.populate('apiKeys').execPopulate();

        assert.equal(_doc.apiKeys.get('github').key, 'abc123');
        assert.equal(_doc.apiKeys.get('twitter').key, 'key');
      });
    });

    it('avoid populating as map if populate on obj (gh-6460)', function() {
      const UserSchema = new mongoose.Schema({
        apiKeys: {}
      });

      const KeySchema = new mongoose.Schema({ key: String });

      const User = db.model('gh6460_User', UserSchema);
      const Key = db.model('gh6460_Key', KeySchema);

      return co(function*() {
        const key = yield Key.create({ key: 'abc123' });
        const key2 = yield Key.create({ key: 'key' });

        const doc = yield User.create({ apiKeys: { github: key._id, twitter: key2._id } });

        const populated = yield User.findById(doc).populate('apiKeys');
        assert.ok(!(populated.apiKeys instanceof Map));
      });
    });
  });

  it('discriminators', function() {
    const TestSchema = new mongoose.Schema({
      n: Number
    });

    const Test = db.model('MapDiscrimTest', TestSchema);

    const Disc = Test.discriminator('MapDiscrimTest_0', new mongoose.Schema({
      m: {
        type: Map,
        of: Number
      }
    }));

    return co(function*() {
      const doc = new Disc({ m: { test: 1 } });
      assert.ok(doc.m instanceof Map);
      assert.deepEqual(Array.from(doc.toObject().m.keys()), ['test']);
      yield doc.save();

      const fromDb = yield Disc.findOne({ 'm.test': 1 });
      assert.ok(fromDb);
      assert.equal(fromDb._id.toHexString(), doc._id.toHexString());
    });
  });

  it('embedded discriminators', function() {
    const EmployeeSchema = new mongoose.Schema({
      name: String
    }, { _id: false, id: false });

    const DepartmentSchema = new mongoose.Schema({
      employees: [EmployeeSchema]
    });

    DepartmentSchema.path('employees').discriminator('Sales', new mongoose.Schema({
      clients: [String]
    }, { _id: false, id: false }));

    DepartmentSchema.path('employees').discriminator('Engineering', new mongoose.Schema({
      apiKeys: {
        type: Map,
        of: String
      }
    }, { _id: false, id: false }));

    const Department = db.model('MapEmbeddedDiscrimTest', DepartmentSchema);

    return co(function*() {
      const dept = new Department({
        employees: [
          { __t: 'Sales', name: 'E1', clients: ['test1', 'test2'] },
          { __t: 'Engineering', name: 'E2', apiKeys: { github: 'test3' } }
        ]
      });

      assert.deepEqual(dept.toObject().employees[0],
        { __t: 'Sales', name: 'E1', clients: ['test1', 'test2'] });

      assert.deepEqual(Array.from(dept.toObject().employees[1].apiKeys.values()),
        ['test3']);

      yield dept.save();

      let fromDb = yield Department.findOne({ 'employees.apiKeys.github': 'test3' });
      assert.ok(fromDb);

      dept.employees[1].apiKeys.set('github', 'test4');
      yield dept.save();

      fromDb = yield Department.findOne({ 'employees.apiKeys.github': 'test4' });
      assert.ok(fromDb);
    });
  });

  it('toJSON seralizes map paths (gh-6478)', function() {
    const schema = new mongoose.Schema({
      str: {
        type: Map,
        of: String
      },
      num: {
        type: Map,
        of: Number
      }
    });

    const Test = db.model('gh6478', schema);
    const test = new Test({
      str: {
        testing: '123'
      },
      num: {
        testing: 456
      }
    });

    assert.deepEqual(test.str.toJSON(), { testing: '123' });
    assert.deepEqual(test.num.toJSON(), { testing: 456 });

    return co(function*() {
      yield test.save();

      const found = yield Test.findOne();
      assert.deepEqual(found.str.toJSON(), { testing: '123' });
      assert.deepEqual(found.num.toJSON(), { testing: 456 });
    });
  });

  it('updating map doesnt crash (gh-6750)', function() {
    return co(function*() {
      const Schema = mongoose.Schema;
      const User = db.model('gh6750_User', {
        maps: { type: Map, of: String, default: {} }
      });

      const Post = db.model('gh6750_Post', {
        user: { type: Schema.Types.ObjectId, ref: 'User' }
      });

      const user = yield User.create({});
      const doc = yield Post.
        findOneAndUpdate({}, { user: user }, { upsert: true, new: true });
      assert.ok(doc);
      assert.equal(doc.user.toHexString(), user._id.toHexString());
    });
  });
});
