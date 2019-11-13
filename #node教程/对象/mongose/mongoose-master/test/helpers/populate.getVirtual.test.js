'use strict';

const Schema = require('../../lib/schema');
const assert = require('assert');
const getVirtual = require('../../lib/helpers/populate/getVirtual');

describe('getVirtual', function() {
  it('handles embedded discriminators (gh-6411)', function(done) {
    // Generate Embedded Discriminators
    const eventSchema = new Schema(
      { message: String },
      { discriminatorKey: 'kind'}
    );

    const batchSchema = new Schema({
      nested: {
        events: [eventSchema]
      }
    });

    const docArray = batchSchema.path('nested.events');

    // First embedded discriminator has a virtual
    const clickedSchema = new Schema({
      element: { type: String },
      users: [ Number ]
    });

    clickedSchema.virtual('users_$', {
      ref: 'Users',
      localField: 'users',
      foreignField: 'employeeId'
    });

    docArray.discriminator('Clicked', clickedSchema);

    // Second embedded discriminator does not have a virtual
    docArray.discriminator('Purchased', new Schema({
      product: { type: String }
    }));

    assert.equal(getVirtual(batchSchema, 'nested.events.users_$').options.ref,
      'Users');

    done();
  });

  it('handles embedded discriminators under single nested (gh-6488)', function(done) {
    // Generate Embedded Discriminators
    const eventSchema = new Schema({ message: String },
      { discriminatorKey: 'kind' });

    const batchSchema = new Schema({ nested: { events: [eventSchema] } });

    const docArray = batchSchema.path('nested.events');

    // *** Adding Nested Layer and adding virtual to schema of nestedLayer
    const nestedLayerSchema = new Schema({ users: [ Number ] }, {
      toJSON: { virtuals: true},
      toObject: { virtuals: true }
    });

    nestedLayerSchema.virtual('users_$', {
      ref: 'Users',
      localField: 'users',
      foreignField: 'employeeId'
    });

    // First embedded discriminator schema
    const clickedSchema = new Schema({
      element: { type: String },
      nestedLayer: nestedLayerSchema
    }, {
      toJSON: { virtuals: true},
      toObject: { virtuals: true}
    });

    docArray.discriminator('Clicked', clickedSchema);

    // Second embedded discriminator
    docArray.discriminator('Purchased', new Schema({ product: String }));

    const virtual = getVirtual(batchSchema, 'nested.events.nestedLayer.users_$');
    assert.equal(virtual.options.ref, 'Users');

    done();
  });

  it('handles multiple calls with discriminator under doc array (gh-6644)', function(done) {
    const eventSchema = new Schema({ message: String }, { discriminatorKey: 'kind'});

    const batchSchema = new Schema({ events: [eventSchema] });

    const docArray = batchSchema.path('events');

    const clickedSchema = new Schema({ element: { type: String }, users: [{}] }, {
      toJSON: { virtuals: true},
      toObject: { virtuals: true}
    });

    clickedSchema.virtual('users_$', {
      ref: 'Users',
      localField: 'users',
      foreignField: 'employeeId'
    });

    docArray.discriminator('Clicked', clickedSchema);

    let virtual = getVirtual(batchSchema, 'events.users_$');
    assert.equal(virtual.options.ref, 'Users');
    assert.equal(virtual.$nestedSchemaPath, 'events');

    virtual = getVirtual(batchSchema, 'events.users_$');
    assert.equal(virtual.options.ref, 'Users');
    assert.equal(virtual.$nestedSchemaPath, 'events');

    done();
  });
});
