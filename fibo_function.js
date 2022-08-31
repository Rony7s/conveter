// this code for fibonacci function serious.....


function function_fibo(n){

    var filo =[0, 1];
    for(var i=1; i<=n; i++){
        filo[i+1] = filo[i-1] +filo[i]; 
    }
    return filo;
}

var fib1 = function_fibo(6);
console.log(fib1);