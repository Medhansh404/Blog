const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

app.post("/", 
(req, res) =>
{
const id = req.body.id
console.log(req.body)
res.status(200).json({message:'This is the blog content for blog { id }'})})
app.listen(process.env.PORT||3000, ()=>console.log("Server running"));