const express = require('express')
const app = express()
const port = 3000
//middleware 1
app.use('/', (req, res, next) => {
    console.log('m1')
    next()
})

//middleware 2

app.use('/', (req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.get('/about', (req, res) => {
    res.send('Hello World! about')
  })

  
  app.get('/contact', (req, res) => {
    res.send('Hello World! contact')
  })

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})