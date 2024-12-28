
//1.Assignment operator 
c=10;
console.log(c);

//2 Arithmetic operator
a=100;
b=50;
console.log("a+b is",a+b);
console.log("a-b is",a-b);
console.log("a*b is",a*b);
console.log("a/b is",a/b);
console.log("a%b is",a%b);

//3.Relational operator

if(a>b)
{
    console.log("a is greater");
}
else if(a<b)
{
    console.log("b is greater");
}
if(a<=b)
{
    console.log("b is greater or equal");
}
else if(a>=b)
{
    console.log("a is greater or equal")
}
if(a==b)
{
    console.log("a is equal to b");
}
if(a===b)
{
    console.log("both a and b value and datatypes are  same");

}
if(a!=b)
{
    console.log("a is not equal to b");
}
if(a!==b)
{
    console.log("Both value and datatype are not same in a and b");
}

//4 Logical operator

a=10,b=20,c=30;
if(c>b &&c>a)
{
    console.log("c is greater");
}
else if(a<c || a<b)
{
    console.log("a is lesser than b");
}
else if(!(a>b) )
{
    console.log("a is lesser");
}

//5 Bitwise operator
a=5;
b=7;
console.log("a&b is",a&b);
console.log("a|b is",a|b);
console.log("a>>b is",a>>b);
console.log("a<<b is",a<<b);
console.log("a^b is",a^b);

//6 Ternary operator
a=10;
b=20;
max=(a>b)?(a+b):(a-b);
console.log("maximum is",max);

    
//7 Unary operator

a=10;
++a;
console.log("Pre increment is ",a);
a++;
console.log("Post increment is",a);