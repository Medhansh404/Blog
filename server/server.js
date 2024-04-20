const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const db = require("./db");

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))



// retrieve all the posts blogs
app.get("/api/v1/blogs", async (req, res)=>{
    try{
    const objs = await db.query("select * from blogs");
    console.log(objs)
    res.status(200).json({
        status: "success",
        results: objs.rows.length,
        data:{
            posts: objs.rows
        },
    });
}
catch(err){
    console.log(err);
}
});


// retrieve only one post
app.get("/api/v1/blogs/:id", async (req, res)=>{
    const post_id = req.params.id;
    try{
        const objs = await db.query(`select * from blogs where id = $1`, [post_id]);
        console.log(objs)
        res.status(200).json({
            status: "success",
            results: objs.rows.length,
            data:{
                posts: objs.rows
            },
        });
    }
    catch(err){
        console.log(err);
    }
    });

//create post
app.post("/api/v1/blogs", async (req, res)=>{
    try{
        const obj = await db.query("insert into blogs (topic, description, category, content) values ($1, $2, $3, $4)", [req.])
    }
    catch(err){}
    
})

//update post
app.put("/api/v1/blogs/:id", (req, res)=>{

})

//delete post
app.delete("/api/v1/blogs/:id", (req, res)=>{

})

app.listen(process.env.PORT||3000, ()=>console.log("Server running"));