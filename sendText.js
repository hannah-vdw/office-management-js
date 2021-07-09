const config = require('./config.js')
const client = require('twilio')(config.accountSid, config.authToken);

client.messages.create({
  to: config.myPhoneNum,
  from: '+447401182040',
  body: 'HELLO THERE'
})
  .then((message) => console.log(message.sid))