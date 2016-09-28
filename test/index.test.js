const assert = require('assert')
  , validateRequired = require('..')

describe('validity-required', function () {

  it('should return validation error if property is undefined', function (done) {

    validateRequired('name', 'Name', {}, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Name is required')
      done()
    })
  })

  it('should return validation error if property is empty string', function (done) {

    validateRequired('name', 'Name', { name: '' }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Name is required')
      done()
    })
  })

  it('should return validation error if property is null', function (done) {

    validateRequired('name', 'Name', { name: null }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Name is required')
      done()
    })
  })

  it('should not return validation error if property is given', function (done) {

    validateRequired('name', 'Name', { name: 'Paul Serby' }, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, undefined)
      done()
    })
  })

})
