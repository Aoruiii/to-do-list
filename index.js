import express from "express";
import bodyParser from "body-parser";
import dateCraft from  "date-craft";

const app = express();
const port = 3000;
let today = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    const currentDate = new Date();
    const todayDate = dateCraft.formatDate(currentDate).format('DDDD, MMMM D').toString();
    res.render("index.ejs",{
        todayDate_: todayDate, 
    });
})

app.get("/work",(req,res)=>{
    res.render("work.ejs");
})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
