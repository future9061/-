const express = require('express')
const path = require("path")
const app = express()
const port = 5000
const mongoose = require('mongoose')
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../client/build')))
app.use("/image", express.static('./image'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/post", require("./Router/postRouter"))
app.use("/api/user", require("./Router/userRouter"))

app.listen(port, () => {
  mongoose.connect(process.env.MONGDB_URI)
    .then(() => {
      console.log(`localhost ${port} 실행 중`)
      console.log(`connecting MongoDB...`)
    })
    .catch((err) => {
      console.log(`${err} ㅠㅠ`)
    })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

