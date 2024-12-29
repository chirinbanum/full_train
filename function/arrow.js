//1 .arrow function
arrowfun=(StudentDept)=>{
    return StudentDept[1];
    }
    console.log(arrowfun(['AIML,CSE,IT',"AIML","CSE","IT"]));

//3.Destructuring operator

var mark=[90,95,93]
var [m1,m2,m3]=mark
console.log(m1,m2,m3);
var [m1,m2]=mark
console.log(m1,m2);

//4 Ternary operator
a=11;
out=a%2==0?"Even":"Odd";
console.log(a,"is",out);

//5 Spread operator:
arr1=[10,20,30];
arr2=[...arr1, 40,50]
console.log(arr2)

//6 .Rest operator

//7 Scope operator
var a=5;
const pi=3.14;
console.log(pi);
console.log(a);
{
    let a=10;
    let b=10.5;
    console.log("inside",a);
    console.log("inside",b);
}
console.log(pi);
console.log(a);
//another one

var a=5;
const pi1=3.14;
console.log(pi1);
console.log(a);
{
    var a=10;
    let b=10.5;
    console.log("inside",a);
    console.log("inside",b);
}
console.log(pi1);
console.log(a); 

//8 Haisting 
//1 st 
console.log(c);
const c=10;
console.log(c); //output undefined 10






