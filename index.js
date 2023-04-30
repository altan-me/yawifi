"use strict";

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

app.get("/", (req, res) => {
  res.render("index", {
    title: "Wifi QR Generator",
  });
});

app.post("/wifi", async function (req, res) {
  const ssid = req.body.ssid;
  const passphrase = req.body.pass;

  if (!ssid || !passphrase) {
    res.status(400).send("Please provide both SSID and passphrase.");
    return;
  }

  const qrCodeData = `WIFI:T:WPA;S:${ssid};P:${passphrase};;`;

  qrcode.toDataURL(
    qrCodeData,
    { errorCorrectionLevel: "Q", scale: 10 },
    (err, url) => {
      if (err) {
        res.status(500).send("Something went wrong.");
        return;
      }
      res.json({ imgUrl: url });
    }
  );
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
