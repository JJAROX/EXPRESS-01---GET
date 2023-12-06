const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.get("/index01", function (req, res) {
  console.log("ścieżka do katalogu głównego aplikacji: " + __dirname)
  res.sendFile(path.join(__dirname, "/static/strona1.html"))

})

app.get("/index02", function (req, res) {
  console.log("ścieżka do katalogu głównego aplikacji: " + __dirname)
  res.sendFile(path.join(__dirname, "/static/strona2.html"))

})
app.get("/index03", function (req, res) {
  console.log("ścieżka do katalogu głównego aplikacji: " + __dirname)
  res.sendFile(path.join(__dirname, "/static/strona3.html"))

})