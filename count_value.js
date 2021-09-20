var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2',4]
    
    }
var a = 0   
for (i in dict){
for(j in dict[i]){
    a++
}

}console.log(a);