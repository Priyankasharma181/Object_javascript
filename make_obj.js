// Take 10 student inputs and marks and save them in an object.
var readline = require("readline-sync")
var num = readline.question("enter the num:")
var obj = {}
for(var i = 0; i<num; i++){
    var key = readline.question("enter the key:")
    var value = readline.question("enter the value:")
    obj[key] = value
}console.log(obj);