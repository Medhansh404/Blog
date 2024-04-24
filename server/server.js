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
    const objs = await db.query(`select * from blogs`);
    //console.log(objs)
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
app.get("/api/v1/blogs/:id", async (req, res) => {
    const post_id = req.params.id;
        try {
            const objs = await db.query(`select * from blogs where id = $1`, [post_id]);
            res.status(200).json({
                status: "success",
                results: objs.rows.length,
                data: {
                    posts: objs.rows
                },
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "error",
                message: "An error occurred while retrieving the blog post."
            });
        }
});


//create post
app.post("/api/v1/blogs", async (req, res)=>{
    try{
        const obj = await db.query("insert into blogs (topic, description, category, content) values ($1, $2, $3, $4)", [req.body.topic, req.body.dscription, req.body.category,req.body.content]);
        //console.log(obj)
        res.status(201).json({
            status: "success",
            results: obj.rows.length,
            data:{
                posts: obj.rows[0],
            },
        });
    }
    catch(err){
        console.log(err);
    }
    
})

//update post
app.put("/api/v1/blogs/:id", async(req, res)=>{
    try{
        const obj = await db.query("UPDATE blogs SET topic = $1,  description = $2, category = $3, content = $4 where id = $5", [req.body.topic, req.body.dscription, req.body.category,req.body.content, req.params.id]);
        //console.log(obj)
        res.status(201).json({
            status: "success",
            results: obj.rows.length,
            data:{
                posts: obj.rows[0],
            },
        });
    }
    catch(err){
        console.log(err);
    }
})

//delete post
app.delete("/api/v1/blogs/:id", async(req, res)=>{
    try{
        const obj = await db.query("DELETE from blogs where id = $1", [req.params.id]);
        //console.log(obj)
        res.status(204).json({
            status: "success",
            results: obj.rows.length,
            data:{
                posts: obj.rows[0],
            },
        });
    }
    catch(err){
        console.log(err);
    }
})


app.get("/api/v1/search", async (req, res)=>{
    const searchparam = req.query.text; 
    console.log(req.query.text)
    if (searchparam) {
        try {
            const objs = await db.query(`select * from blogs where topic ILIKE $1`, [`%${searchparam}%`]);
            //console.log(objs) 
            res.status(200).json({
                status: "success",
                results: objs.rows.length,
                data: {
                    posts: objs.rows
                },
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: "error",
                message: "An error occurred while searching for blog posts."
            });
        }
    }
});

/*   
        }*/ 
app.listen(process.env.PORT||3000, ()=>console.log("Server running"));