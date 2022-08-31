var n = 5;
var f = 1;
var phy =' ';
for(var i=1; i<=n; i++){
    f = f*i;
    phy = phy+'*'+ i;
}
console.log(n+'! is '+phy+' = '+f);