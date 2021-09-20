// You need to count the number of occurrences of each unique character of a word "MISSISSIPPI" and store them in an object in key, value pairs.

const list1=[]
const word="MISSISSIPPI"
let obj={}
for (var i of word) {
    if(list1.includes(i)){
     obj[i]=obj[i]+1
    }else{
        list1.push(i);
        obj[i]=1;
}
}
console.log(obj);

