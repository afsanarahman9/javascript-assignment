// Instructions:- calculate the area of a square, reactangle and circle, if the sum of all the three areas
// is greater than 200, display a message that , "Sum of Areas is greater than 200", if not then display the
// product of all the three areas.

var a = 6;
var b = 10;
var r = 6;

var areasq = a * a;
var arearec = a * b;
var areacir = 3.14 * r * r;

var sum = areasq + arearec + areacir;
var pro = areasq * arearec * areacir;

console.log("== SUM ==", sum);
if (sum > 200) {
  console.log("sum of areas is greater than 200");
} else console.log(pro);
