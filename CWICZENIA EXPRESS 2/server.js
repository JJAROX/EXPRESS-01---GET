const express = require("express")
const app = express()
const PORT = 2000;
const path = require("path")

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.get("/", function (req, res) {
  const count = parseInt(req.query.count);
  const color = req.query.color
  let divhtml = ''
  for (i = 1; i <= count; i++) {
    divhtml += `<div style = "height:100px; width:100px;background-color:${color}; text-align:center; color:white; font-size:25px; margin:3px; display:inline-block;">${i}</div>`
  }
  res.send(divhtml)
})
