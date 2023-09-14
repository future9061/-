var express = require('express');
var router = express.Router();
const { Post } = require("../Model/Post.js")
const { Counter } = require("../Model/Counter.js")
const { User } = require("../Model/User.js")
const multer = require('multer')


// upload에서 작성한 게시글이 mongodb에 저장됨
router.post('/submit', (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  }
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum
      User.findOne({ uid: req.body.uid }).exec().then((userInfo) => {
        temp.author = userInfo._id
        const communityPost = new Post(temp)
        communityPost.save().then(() => {
          Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
            res.status(200).json({ success: true })
          })
        })
      })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

//mongodb에 저장된 post를 들고 와서 list에 보여주기
router.post("/list", (req, res) => {
  Post.find()
    .populate("author")
    .exec().then((doc) => {
      res.status(200).json({ success: true, postList: doc })
    }).catch(() => {
      res.status(400).json({ success: false })
    })
})

//디테일 페이지에 가면 해당 상품의 데이터를 보여줌
router.post("/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) }).exec().then((doc) => {
    res.status(200).json({ success: true, post: doc })
  }).catch(() => {
    res.status(400).json({ success: false })
  })
})

//수정 화면 요청
router.post("/edit", (req, res) => {
  let temp = req.body
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true })
    }).catch(() => {
      res.status(400).json({ success: false })
    })
})


//게시글 삭제 요청
router.post('/delete', ({ body }, res) => {
  Post.deleteOne({ postNum: Number(body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true })
    })
    .catch(() => {
      res.status(400).json({ success: false })
    })
})

//img 업로드 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'image/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage }).single("file")

router.post('/image', (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.status(400).json({ success: false })
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path })
    }
  })
})


module.exports = router;