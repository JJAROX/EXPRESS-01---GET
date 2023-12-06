const express = require("express")
const app = express()
const PORT = 2000;
const path = require("path")

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.get("/", function (req, res) {
  const value = parseFloat(req.query.value)
  const Radians = req.query.degToRad === 'true'
  let divhtml = ''
  if (!Radians) {
    convertRadians = (value * (180 / Math.PI)).toFixed(2)
    divhtml += `<h1 style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">${value} radianów = ${convertRadians} stopni</h1>`
  } else if (Radians) {
    convertDegrees = (value * (Math.PI / 180)).toFixed(2)
    divhtml += `<h1 style="font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">${value} stopni = ${convertDegrees} radianów</h1>`
  }
  res.send(divhtml)
})

