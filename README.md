# YAWIFI - Yet Another WiFi QR Code Generator

![WAWIFI image](https://i.imgur.com/vHD7JAQ.png)

YAWIFI is a Node.js web application that generates QR codes for Wi-Fi networks. It allows users to quickly generate a QR code for their Wi-Fi network, which can be scanned by their friends and family to connect to the Wi-Fi network without typing in the SSID and password.

## Features

- Generate QR codes for Wi-Fi networks
- Supports WPA and WPA2 encryption
- Customize the SSID and password for your Wi-Fi network
- Download the generated QR code as a PNG image
- Easy to use and lightweight

## Installation

To install YAWIFI, follow these steps:

1. Clone the repository:

```
git clone https://github.com/altan-me/yawifi.git
```

2. Install the dependencies:

```
npm install
```

3. Start the application:

```
npm start
```

4. Open your browser and go to http://localhost:8080

## Usage

1. Open YAWIFI in your web browser
2. Enter the SSID and password for your Wi-Fi network
3. Click the "Generate" button
4. The QR code for your Wi-Fi network will be displayed on the screen

## Generating QR Codes

YAWIFI uses the `qrcode` library to generate QR codes for Wi-Fi networks. The library is included as a dependency in the `package.json` file and is automatically installed when you run `npm install`. The library is called in the `POST /wifi` route to generate the QR code data.

## Acknowledgements

YAWIFI was built using the following open source software:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [qrcode](https://github.com/soldair/node-qrcode)
- [WaterCSS](https://github.com/kognise/water.css)
