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

var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , collection = save('author')
  , validateEach = require('validity-validate-each')

var schema = schemata(
    { emailAddresses:
      { type: Array
      , validators:
        { all:
          [ validteEach(validity.required)
          , validateEach(validity.email)
          ] }
      }
    })
    
```

## Credits
[Paul Serby](https://github.com/serby/)

## License

ISC
