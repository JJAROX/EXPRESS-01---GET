const express = require("express")
const app = express()
const PORT = 2000;
const path = require("path")
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.get('/', function (req, res) {
  const now = new Date();
  res.cookie("cookieA", d = new Date(Date.now()), { expires: new Date(Date.now() + 1000 * 60 * 60 * 4), httpOnly: true })
    .cookie("cookiec", m = (d - new Date(getMinutes(), getSeconds())), { expires: new Date(Date.now() + 1000 * 60 * 60 * 4), httpOnly: true })
    .send(`Witaj , pierwszy raz byłeś na naszej stronie ${d.getMinutes()} minuty i ${d.getSeconds()} sekund temu ostatnio byłeś na naszej stronie ${m.getMinutes()} minut ${m.getSeconds()} sekund temu" `)

  console.log("cookies :  ", req.cookies);

});











app.get('/time', function (req, res) {
  const now = new Date();

  // Odczytaj wartość ciasteczka "cookieB" (jeśli istnieje)
  let cookieBData = req.cookies.cookieB || [];

  // Dodaj aktualny czas do tablicy
  cookieBData.push(now);

  // Ustaw zaktualizowane dane w ciasteczku "cookieB"
  res.cookie("cookieA", now, { expires: new Date(now.getTime() + 1000 * 60 * 60 * 4), httpOnly: true })
    .cookie("cookieB", cookieBData, { expires: new Date(now.getTime() + 1000 * 60 * 60 * 4), httpOnly: true })
    .send(`Witaj, pierwszy raz byłeś na naszej stronie ${d.getMinutes()} minut i ${d.getSeconds()} sekund temu. Ostatnio byłeś na naszej stronie ${getLastVisitTime(cookieBData)}"`);

  console.log("cookies: ", req.cookies);
});

// Funkcja do obliczania czasu od ostatniego wejścia
function getLastVisitTime(cookieBData) {
  if (cookieBData.length > 1) {
    const lastVisit = new Date(cookieBData[cookieBData.length - 2]);
    const now = new Date();
    const timeDifference = now - lastVisit;
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const secondsAgo = Math.floor((timeDifference / 1000) % 60);
    return ` ${minutesAgo} minut ${secondsAgo} sekund temu`;
  } else {
    return " pierwszy raz odwiedzasz naszą stronę";
  }
}
