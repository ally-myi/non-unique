//the result of the working code will be seen on the console
// when using it in the software to try out code do not add the sript tags, just the javascript code
<script>
var score = [9, 9, 111, 2, 3, 4, 4, 5, 7]; // This is the array and the contents of each variable called score.

var obj={}; //object is the score since that is what was defined in var above. It will help to make easy acces and reference

for(var i=0;i<score.length;i++){ 
    //the i is a loop. When I say i=1 that means the loop should start being used from the first variable in the score array
    //the i<score.length defines the condition for the loop to run which in this case is less than the length of the score, meaning the amount of scores in the array
    if(!obj[score[i]]){ // if this statement is true, then this block of code will be processed
        obj[score[i]]=1;
    } else {
        obj[score[i]]=obj[score[i]]+1; // if the above statement is not true then this block of code will be executed
    }
    
}
var result=[] // this block of code will give back those repeated numbers to the console
for(var key in obj){ // by using the key function we can return the elements in the array that we need
    if(obj[key]>1){ // condition to detect the elemnts we want the key method to be used
        result.push(Number(key)) // change this to result.push(key) to find duplicate strings in an array
    }
}

console.log(result) // by using console.log() to display the result it works as a debugging method
</script>
