const express = require('express')
const path = require("path")
const app = express()
const port = 5000
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  mongoose.connect('mongodb+srv://leemirae:10zapJSlHVxolpyK@cluster0.gi7m1r1.mongodb.net/?retryWrites=true&w=majority')
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

app.post('/api/test', (req, res) => {
  console.log(req.body)
  res.status(200).json({ success: true, text: 'list' })
})