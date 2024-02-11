const express=require('express');

const app=express();

app.use("/main/upload",require("./routes/upload_route"));

app.listen(6000,()=>{
    console.log("Server is running on port 6000");
});