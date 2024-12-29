//1 Applicable for only array
array=[10,20,30];
array.forEach((element,index) => {//First parameter should take the element and second take index only 
    console.log("Element is",element,"and it's index is",index);
});
// 2 Key value pair
obj1={
    "firstname":"Chirin",
    "lastname":"banu",
    "age":20
}
console.log(obj1);
console.log(obj1.age);

odj1.forEach((key,value) => {
    console.log(value);
});
