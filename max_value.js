var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var a = Object.values(my_dict)
var b = a[0]
var c = a[1]
var d = a[2]
for(i in a){
    if (b<a[i]){
        b = a[i]
    }if(b<a[i]){
        c = a[i]
    }if(b<a[i]){
        d = a[i]
    }
}console.log(b,c,d);