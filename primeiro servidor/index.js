const express = require("express")

const server = express()

server.get("/hello", (rep, res) => {
    return res.json({
        title:"hello word",
        message: "seja bem vindo!"
    })
})

server.listen(3000)