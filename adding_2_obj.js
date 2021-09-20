var d1 = {'a': 100, 'b': 200, 'c':300,}
var d2 = {'a': 300, 'b': 200, 'd':400}
var dict = {}
var a = {}
for (i in d1){
    for(j in d2){
        if (i===j){
            a[i] = d1[j]+d2[j]
            break
        }else{
            dict[i] = d1[i]
            dict[j] = d2[j]

        }
    }
}for(i in a){
    dict[i] = a[i]
}console.log(dict);