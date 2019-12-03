
<script>
var score = [6, 6, 111, 2, 3, 20, 20, 5, 7];

var obj={};

for(var i=0;i<score.length;i++){
    if(!obj[score[i]]){
        obj[score[i]]=1;
    } else {
        obj[score[i]]=obj[score[i]]+1;
    }
}
var result=[]
for(var key in obj){
    if(obj[key]>1){
        result.push(Number(key)) // change this to result.push(key) to find duplicate strings in an array
    }
}

console.log(result)
</script>
