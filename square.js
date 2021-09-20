// Write a programme to generate and print a dictionary that contains a number (between 1 and n) in the form (x, x*x).

// Sample input (n = 5) :

// Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.
const readline = require("readline-sync")
const number = readline.question("enter the num:")
dic = {}
for (var i = 1; i<number; i++){
    dic[i] = i*i
}console.log(dic);


