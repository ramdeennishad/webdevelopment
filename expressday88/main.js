const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get app.put app.post app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!22')
})

app.get('/about', (req, res) => {
    res.send('About me mmm')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact me ')
  })

//   app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!!!!')
//   })

//   app.get('/blog/intro-to-py', (req, res) => {
//     //logic to fetch intro to js from the db
//     res.send('Hello intro-to-py!!!!')
//   })

  app.get('/blog/:slug', (req, res) => {
    //logic to fetch intro to {slug} from the db
    //for url:http://localhost:3000/blog/intro-to-js?mode=dark&region=in
    console.log(req.params)//will output {slug: 'intro-to-js'}
    console.log(req.query)//will output {mode: 'dark' region: 'in'}
    
    res.send(`hello ${req.params.slug}`)
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})