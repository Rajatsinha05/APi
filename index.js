const express=require('express');


const app = express();



app.get("/",(req,res)=>{

    res.send("working")
})



app.listen(8080,()=>{
    console.log("server is runnning on port 8080")
})
