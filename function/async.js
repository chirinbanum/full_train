/*//with promise word

async function fun() {
    return "Hello";
}
arrowFunname=async () => {
    return "Kec";
}
console.log(fun());
console.log(arrowFunname());

//without promise word
async function fun() {
    console.log("Hello");
}
arrowFunname=async () => {
    console.log("Kec");
}
fun();
arrowFunname();*/

//with await

async function fun() {
    setTimeout(()=>{
    console.log("Hello");
    },5000)
    console.log(await"Hello")

}
arrowFunname=async () => {
    setTimeout(()=>{
        console.log("KEC");
        },4000)
        console.log(await"KEC")
    
}
fun();
arrowFunname();