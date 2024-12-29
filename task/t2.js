//Arrow function and its 4 types

//1)funtion with argument  with return type
fun1=(a,b)=>{
    return a+b;
}
console.log("Sum of 2 and 4 is:",fun1(2,4));

//2)funtion with argument  without return type

fun2=(st)=>{
    console.log(st);
}
fun2("Hello World.");

//3)funtion without argument  with return type

fun3=()=>{
    return "Good";
}
console.log(fun3());

//4)funtion without argument  without return type

fun4=()=>{
    console.log("Think positive..");
}
fun4();