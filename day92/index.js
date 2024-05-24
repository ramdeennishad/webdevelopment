const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

//https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let sitename= "adidas"
    let searchtext = " Search Now"
    let arr=[1,23,33,45]
  res.render("index",  {sitename : sitename , searchtext : searchtext, arr} )
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle= "adidas why and when?"
    let blogContent = " Its a very Good Brand"
  res.render("blogpost",  {blogTitle: blogTitle, blogContent : blogContent} )
})


app.listen(port, () => {
  console.log(`Example hiiiii app listening on port ${port}`)
})