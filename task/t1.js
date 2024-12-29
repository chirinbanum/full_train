//Find odd or even using Bitwise operator

//Bitwise AND operator (&)
console.log("Bitwise AND operator")
var a=50;
var b=43;
if((a&1)==0){
    console.log(a," is even number.")
}
else{
    console.log(a," is odd number.");
}
if((b&1)==0){
    console.log(b," is even number.");
}
else{
    console.log(b," is odd number");
}

//Bitwise XOR (^)
console.log("Bitwise XOR operator")

let x=11;
let y=38;
if((x^1)==(x-1)){
    console.log(x," is odd number.");
}
else{
    console.log(x," is even number.");
}
if((y^1)==(y-1)){
    console.log(y," is odd number.");
}
else{
    console.log(y," is even number.");
}

//Bitwise OR(|)
console.log("Bitwise OR operator")

var m=70;
var n=69;
function iseven(num){
    return !(num&1);
}
c=iseven(m)
if(c==0){
    console.log(m," is odd number.");
}
else{
    console.log(m," is even number.");
}
d=iseven(n)
if(d==1){
    console.log(n," is even number.");
}
else{
    console.log(n," is odd number.");
}

//Bitwise NOT(~)
console.log("Bitwise NOT operator")

var w=27;
var u=78;
function isEve(num){
    return ~(num&1);
}
i=isEve(w);
j=isEve(u);
if(i==-1){
    console.log(w," is even number.");
}
else{
    console.log(w," is odd number.");
}
if(j==-1){
    console.log(u," is even number.");
}
else{
    console.log(u," is odd number.");
}