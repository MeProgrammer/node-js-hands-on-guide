// create a list of us states
const myName = 'Mohamed Mousa'
var crypto = require('crypto');
// var dateTime = require('node-datetime');
// var dt = dateTime.create();
// var formatted = dt.format('yMdHms');
var now = new Date()
var formatted = '' + now.getUTCFullYear() + (now.getUTCMonth()+1).toString().padStart(2, '0') + now.getUTCDate().toString().padStart(2, '0') + now.getUTCHours().toString().padStart(2, '0') + now.getUTCMinutes().toString().padStart(2, '0') + now.getUTCSeconds().toString().padStart(2, '0')
console.log(formatted);
// var name = 'braitsch';
var computed = `ModernBroker ngRK8d_5xaMJqCFKSbMKHDZYieed9pm4CU3J-g1rY7o~14d685e5109bd1ca53d7a50f11d205a3 x-ml-timestamp:${formatted}`
var hash = crypto.createHash('md5').update(computed).digest('hex')
console.log(hash);
// console.log(myName.split(' '))
// console.log(myName.charAt(4))
// console.log(myName.indexOf('ou', 10))

// console.log(myName.replace('ou', 'o'))

//create a list of us states