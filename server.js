import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import  DocRoutes from "./src/routes/documentRoutes";

dotenv.config('./.env');

const app=express();
app.use(bodyParser.json());
app.use("/doc", DocRoutes)

app.use("/",(req,res)=>
res.status(200).json({
    message:"This is a wrong LostFound APi",
})
);
const dbUrl=process.env.DATABASEURL;
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>console.log("Database successfully connected"))
const port=process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
export default app;