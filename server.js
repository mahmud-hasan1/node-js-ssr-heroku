const express = require("express")
const morgan = require("morgan")


let PORT = process.env.PORT || 5000


const app = express()

app.use(morgan("dev"))

app.get("/", function (req, res){
  res.send("fddddddddd")
})



app.listen(PORT, ()=>console.log(`server is running on port ${port}`))