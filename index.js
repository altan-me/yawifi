const express = require("express");
const qrcode = require("qrcode");
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "pug");
app.use(express.json());
// serve static files from the `public` folder
// app.use(express.static(__dirname + "/public"));
// ...
app.get("/", (req, res) => {
  //   res.render("index");
  res.render("index", {
    name: "Ayo",
    title: "Wifi QR Generator",
  });
});

app.post("/wifi", async function (req, res) {
  console.log(req.body);
  const ssid = req.body.ssid;
  const passphrase = req.body.pass;

  if (!ssid || !passphrase) {
    res.status(400).send("Please provide both SSID and passphrase.");
    return;
  }

  const qrCodeData = `WIFI:T:WPA;S:${ssid};P:${passphrase};;`;

  qrcode.toDataURL(qrCodeData, { errorCorrectionLevel: "Q" }, (err, url) => {
    if (err) {
      res.status(500).send("Something went wrong.");
      return;
    }
    res.json({ imgUrl: url });
    // res.send(`<img src="${url}">`);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
