// Write a program to take 1 input and check whether given input exists in our object or not, if it exists print exists or else prints not exist.
let dict={"name":"Raju", "marks":56}
var readline = require("readline-sync")
let n = readline.question("enter the n:")
for(i in dict){
    if(i === n){
        console.log("exit")
        break
    }else{
        console.log("not exit");
        break
    }
}

