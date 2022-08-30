// Name: Rony Ahmmed
// github.com/rony7s

// this code take makes of six subject return CGPA


function sub_gpa(num, marks){
    var s_gpa = 0;
    num = (100*num)/marks;
    if(num>=80){
        s_gpa = 4;
       }else if( num>=75){
        s_gpa = 3.75;
       }else if( num>=70){
        s_gpa = 3.5;
       }else if( num>=65){
        s_gpa = 3.25;
       }else if( num>=60){
        s_gpa = 3;
       }else if( num>=55){
        s_gpa = 2.75;
       }else if( num>=50){
        s_gpa = 2.5;
       }else if( num>=45){
        s_gpa = 2.25;
       }else if( num>=39){
        s_gpa = 2;
       }else{
        s_gpa = 0;
       }
    return s_gpa;
}
// input first your obtain number second this subject marks; suppose you got 20; but exam marks 30; give(20, 30)
var result = sub_gpa(190, 250);
console.log(result);