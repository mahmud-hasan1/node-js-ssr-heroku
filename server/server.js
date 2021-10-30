import express from "express"

import React from "react";
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";

let PORT = process.env.PORT || 5000

let isDev = false
if(process.env.NodeENV === "development"){
  isDev = true
}

const app = express()
app.use(express.static("build"));
app.use("/public", express.static("public"));
app.use(express.json())


if(isDev){
const devServer = require('./devServer')
// only for development server............
  devServer(app)
}


app.get("/api/users", (req, res)=>{
  res.send([
    {username: 'A'},
    {username: 'B'},
  ])
})

app.get("*", (req, res) => {
  const store = createStore(req)
  res.send(renderer(req, store, {}, isDev))
});


app.listen(PORT, () =>
  console.log(`server a is running http://localhost:${PORT}`)
);

      