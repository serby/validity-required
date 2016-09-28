var validity = require('validity')

module.exports = validity.createValidatorAllowingFailureMessageOverride(
  validity.booleanToCallback(isValid), '#{name} is required')

function isValid (value) {
  // false for undefined, null and empty string
  if (value === undefined || value === null || value === '') {
    return false
  }
  return true
}
