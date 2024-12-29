//1 key value pair using ForIn 
obj1={
    "firstname":"Chirin",
    "lastname":"banu",
    "age":20
}
for(const element in obj1)
{
    console.log(element);//only print the index that is key
}