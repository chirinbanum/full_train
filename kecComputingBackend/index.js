var express = require('express')
var path = require('path')
var mdb = require('mongoose')
var User=require('./models/users')
var app = express()     
const PORT = 3001;
app.use(express.json())
mdb.connect("mongodb://localhost:27017/kec")
.then(() => {
    console.log("MongoDB connection successful");
})
.catch(() => {
    console.log("Check your connection string");
})
app.get('/', (req, res) => {
    res.send("Welcome to Backend Server");
})
app.get("/json", (req, res) => {
    res.json({ server: "Welcome to Backend", url: "localhost", port: PORT })
})
app.get("/static", (req, res) => {
    console.log("directory", __dirname);
    res.sendFile(path.join(__dirname, '/index.html'));
    
})
app.post('/signup',(req,res)=>{
    //var {firstName,lastName,email}=req.body;
    var {firstName,lastName,email,password}=req.body;
    console.log(firstName,lastName,email,password);
    try{
        //var newUser=new User({
          //  firstName:firstName,
           // lastName:lastName,
           // email:email
        //})
        var newUser=new User(req.body)
        console.log(req.body.password);
        newUser.save()
        console.log("User Added successfully")
        res.status(200).send("User add successfully")
    }
    catch(err){
        console.log(err);
    }
})
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords=await User.find()
        res.json(allSignUpRecords)
        console.log("All Records are fetched");
        
    }
    catch(err){
        console.log("err");
        res.send(err)
    }
})
app.post('/login',async(req,res)=>{
    var {email,password}=req.body;
    try{
        var existingUser=await User.findOne({email:email})
        if(existingUser){
            if(existingUser.password!=password){
                res.json({message:"Invalid credentials",isLoggedIn:false})
            }
            else{
            res.json({message:"Login Successful",isLoggedIn:true})
            }

        }
        else{
            res.json({message:"Login Failed",isLoggedIn:false})
        }
    }
    catch(err){
        console.log("Login failed");
    }
      
})

app.listen(PORT, () => { 
    console.log(`Backend sever started\nUrl:http://localhost:${PORT}`);

})