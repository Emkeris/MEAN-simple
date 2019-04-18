const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'),
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.post('/api/post', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Posts were sent Successfully'
  })
})

app.use('/api/posts', (req, res, next) => {
  const posts = [{
      id: 'ranom-sfgsd',
      title: 'title first from server',
      content: 'This is some random text from server'
    },
    {
      id: 'ranom-soikdjv',
      title: 'title second from server',
      content: 'This is some other random text from server'
    }
  ]
  res.status(200).json({
    message: 'Posts were patched succesfully',
    posts: posts
  })
});

module.exports = app;
