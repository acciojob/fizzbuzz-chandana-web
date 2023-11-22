//your JS code here. If required.
function num() {
    arr='';
    for(let i=1;i<=20;i++){
        if(i%3 === 0 && i%5 === 0){
            arr += 'FizzBuzz\n';
        }else if(i%3===0){
            arr +='Fizz\n';
        }else if(i%5===0){
            arr+='Buzz\n';
        }else{
            arr+=i+'\n';
        }
    }
    alert(arr);
}
num();