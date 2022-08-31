// check prime number

var n = 2311;
for(var i = 2; i<=(n-1); i++){
    if(n%i==0){
        console.log(n+" is not a Prime number");
        break;
    }else{
        console.log(n +" is a Prime number");
        break;
        }
}