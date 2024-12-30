let islike=false;
let iscomment=false;
let isshare=false;
let ispost=false;
async function likecode(){
    return new Promise((liked,alreadyliked)=>{
        if(!islike){
            islike=true;
        liked("like the post successfully.")
        }
        else{
            alreadyliked("you already liked the post..");
        }
    })
}
async function unlikecode(){
    return new Promise((resolve,reject)=>{
        if(islike){
            islike=false;
            resolve("Like removed successfully...");
        }
        else{
            reject("you have not like the post yet..")
        }
    })
}
async function commentcode(){
    return new Promise((commentposted,alreadycommented)=>{
        if(!iscomment){
            iscomment=true;
        commentposted("comment posted successfully in the post.")
        }
        else{
            alreadycommented("you already commented this section");
        }
    })
}
async function uncommentcode(){
    return new Promise((resolve,reject)=>{
        if(iscomment){
            iscomment=false;
            resolve("comment removed successfully...");
        }
        else{
            reject("you have not comment to this post yet..")
        }
    })
}
async function sharecode() {
    return new Promise((shared,alreadyshared)=>{
        if(!isshare){
            isshare=true;
            shared("post share successfully..");
        }
        else{
            alreadyshared("you already shared the post...");
        }
    })
    
}

async function unsharecode(){
    return new Promise((resolve,reject)=>{
        if(isshare){
            isshare=false;
            resolve("share removed successfully...");
        }
        else{
            reject("you have not share this  post yet..")
        }
    })
} 
async function createPost(){
    var post=new Promise((cpost)=>{
        cpost("post created successfully...");
    })
        //[function commentcode(): Promise<any>] in this the any means it will return any type like object or string,
    await Promise.all([post,commentcode(),likecode(),sharecode()])
    .then(([post,comment,like,share])=>{
    console.log(post);
    console.log(comment);
    console.log(like);
    console.log(share);
    })
    .catch((error)=>{
        console.log(error)
    })
}
createPost();

async function removepost(){
    var unpost=new Promise((rpost)=>{
        rpost("Post removed successfully....");
    })
    await Promise.all([unpost,uncommentcode(),unlikecode(),unsharecode()])
    .then(([unpost,uncomment,unlike,unshare])=>{
        console.log(unpost);
        console.log(uncomment);
        console.log(unlike);
        console.log(unshare);
    }).catch((error)=>{
        console.log(error);
    })
}
setTimeout(()=>{
    console.log("removing ....")
    removepost();
},2000);

//git commands
//git commit --amnd to add something to existing file    