const express = require("express")
const app = express()
const PORT = 2000;
const path = require("path")

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.get('/', function (req, res) {
  alink = ''
  for (i = 1; i <= 50; i++) {
    let randomId = Math.floor(Math.random() * 100) + 1;
    alink += `<a href="products/${randomId}" style="margin:3px">produkt id = ${randomId}</a>`
  }
  res.send(alink)
});
app.get('/products/:id', function (req, res) {
  let id = req.params.id
  res.send(`Podstrona z danymi produktu o id = ${id}`)
});
