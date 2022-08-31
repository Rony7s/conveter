// this code for fibonacci serious.....

var filo =[0, 1];
var n = 4; //this number first to last number
for(var i=1; i<=n; i++){
    filo[i+1] = filo[i-1] +filo[i]; 
    console.log(filo[i+1]);
}