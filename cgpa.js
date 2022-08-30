// this program create a funcation for calculating cgpa from 6 subject;

function cgpa (sub1, sub2, sub3, sub4, sub5, sub6){
    var gpa = (sub1+sub2+sub3+sub4+sub5+sub6)/6;
    return gpa;
}

var name ="AB Rohim";
var result = cgpa(4, 3, 4, 3.2, 3, 4);
console.log( name +" Now your CGPA is "+result);

var name ="Mr. Abul";
var result = cgpa(3, 2.1, 2, 3.2, 3, 4);
console.log(name+" Now your CGPA is "+result);