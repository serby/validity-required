# validity-required

Basic validity style validator to ensure a required property is present in an object.

As part of the modularisation of [validity](https://github.com/serby/validity), this replaces the built-in `validity.required`.

[![build status](https://secure.travis-ci.org/serby/validity-required.svg)](http://travis-ci.org/serby/validity-required)
[![dependency status](https://david-dm.org/serby/validity-required.svg)](https://david-dm.org/serby/validity-required)

## Installation

```
npm install --save validity-required
```

## Usage

```js

const schemata = require('schemata')
  , required = require('.')
  , schema = schemata(
    { emailAddress:
      { validators: [ required ] }
    })
  , schemaWithCustomMessage = schemata(
    { emailAddress:
      { validators: [ required.setFailureMessage('Where is #{name}?') ] }
    })


schema.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Email Address is required'
})

schemaWithCustomMessage.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Where is Email Address?'
})

```

## Credits
[Paul Serby](https://github.com/serby/)

## License

ISC
