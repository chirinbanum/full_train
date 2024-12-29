function databasesharing()
{
    console.log("Data stored successfully")
}
function submitform(formMsg,dbs)
{
    setTimeout(()=>{
    dbs()
    console.log(formMsg)
    },2000)
}
submitform("Form submitted successfully",databasesharing)
