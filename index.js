const express = require('express')
const useragent = require('express-useragent')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 1234

app.use(useragent.express())

const checkForUserAgent = (useragent) => {
  try {
    if (useragent.source === 'Contiki/1.0 (Commodore 64; http://dunkels.com/adam/contiki/)') {
      return true
    } else {
      return false
    }
  } catch(e) {
    console.log(e)
  }
  
}


app.get('/', (req, res) => {
  console.log(req.useragent)
  console.log(req.headers)
  if (req.useragent.source === 'Contiki/1.0 (Commodore 64; http://dunkels.com/adam/contiki/)') {
    res.send('anonCTF{8b1t_w3b}')
  } else {
    res.sendFile(path.join(__dirname,'public','index.html'))
  }
})



app.listen(PORT, () => {
  console.log('Server is up!')
})