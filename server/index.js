const express = require('express')
const path = require("path")
const app = express()
const port = 5000
const mongoose = require('mongoose');
const cors = require("cors");


app.use(express.static(path.join(__dirname, '../client/build')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const { Post } = require("./Model/Post.js")
const { Counter } = require("./Model/Counter.js")

app.listen(port, () => {
  mongoose.connect('mongodb+srv://leemirae:10zapJSlHVxolpyK@cluster0.gi7m1r1.mongodb.net/community?retryWrites=true&w=majority')
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


// upload에서 작성한 게시글이 mongodb에 저장됨
app.post('/api/post/submit', (req, res) => {
  let temp = req.body
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum
      const communityPost = new Post(temp)
      communityPost.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
          res.status(200).json({ success: true })
        })
      })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

//mongodb에 저장된 post를 들고 와서 list에 보여주기
app.post("/api/post/list", (req, res) => {
  Post.find().exec().then((doc) => {
    res.status(200).json({ success: true, postList: doc })
  }).catch(() => {
    res.status(400).json({ success: false })
  })
})

//디테일 페이지에 가면 해당 상품의 데이터를 보여줌
app.post("/api/post/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) }).exec().then((doc) => {
    res.status(200).json({ success: true, post: doc })
  }).catch(() => {
    res.status(400).json({ success: false })
  })
})

