// this program a function of convater taka to dollar
function takaTodollar(taka){
    var dollar = taka/120;
    return dollar;

}

var balance = takaTodollar(300);

console.log("Now my Dollar is "+balance);