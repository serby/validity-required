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
