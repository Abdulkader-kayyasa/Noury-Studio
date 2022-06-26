const express = require('express')
const app = express()
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.use(express.static(__dirname +'/public'));

app.listen(port,host, () => {
    console.log('app listening at '+ port)
  })
