//Location finder(it is the syncronous programming)
function locationFinder()
{
   train=7
   return new Promise((resolve,reject)=>{
   if(train==7){
    resolve("Train has arrived")
   }
   else{
    reject("Train hasn't arrived yet")
   }
})
}
