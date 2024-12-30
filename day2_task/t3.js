//REST OPERATOR
// Rest Operator is used to collect remaining elements or properties.
//Example
console.log("Rest operator");
fun=(f,s,...rest)=>{
    console.log(f);
    console.log(s);
    console.log(rest);
}
fun("jhon","25","Reading","Gaming","Drawing","Dancing");

//SPREAD OPERATOR
//The Spread Operator is used to spread or unpack elements from an array or object into individual elements.
//Example
arr1=[1,2,3];
arr2=[4,5,6];
arr3=[...arr1,...arr2,"hai","hello"];
console.log(arr3);


