//Callback function
calculate=(a,b,callback)=>{
    console.log("Adding of two numbers..");
    console.log(a+b);
    setTimeout(()=>{
        callback();
    },2000);
}
greetings=()=>{
    console.log("Thus task completed successfully.....");
}
calculate(3,4,greetings);