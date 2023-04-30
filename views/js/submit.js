const displayResponse = function (response) {
  document.getElementById("qrCodeImg").src = response.imgUrl;
};

function logSubmit(event) {
  event.preventDefault();
  let ssid = document.getElementById("ssid").value;
  let pass = document.getElementById("pass").value;
  const data = { ssid: ssid, pass: pass };
  fetch("/wifi", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      displayResponse(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let form = document.getElementById("qrCodeForm");
form.addEventListener("submit", logSubmit);
