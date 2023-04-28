const displayResponse = function (response) {
  document.getElementById("qrCodeImg").src = response.imgUrl;
};

function logSubmit(event) {
  event.preventDefault();
  //   populateUI("Checking URL..", " ", true, "127px");
  let ssid = document.getElementById("ssid").value;
  let pass = document.getElementById("pass").value;
  const data = { ssid: ssid, pass: pass };
  console.log(data);
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
      console.log(data);
      console.log(data.imgUrl);
      displayResponse(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

let form = document.getElementById("qrCodeForm");
form.addEventListener("submit", logSubmit);
