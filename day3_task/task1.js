obj1={
    "firstname":"Chirin",
    "lastname":"banu",
    "age":20
}
// Task 1a) Using forEach (by iterating over keys directly)
Object.keys(obj1).forEach(key => {
    console.log(`${key}: ${obj1[key]}`);
});

// Task 1b) Using for...of (by iterating over keys directly)
for (const key of Object.keys(obj1)) {
    console.log(`${key}: ${obj1[key]}`);
}
    
