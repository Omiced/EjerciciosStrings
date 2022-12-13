const btnEnviarEl = document.querySelector("#btn-enviar");
const exampleFormControlInput1 = document.getElementById(
  "exampleFormControlInput1"
);
const exampleFormControlTextarea1 = document.getElementById(
  "exampleFormControlTextarea1"
);
const alertError = document.getElementById("alert");
const rfcInputEl = document.getElementById("rfc-input");
// btnEnviarEl.addEventListener("click", (e) => {
//   e.preventDefault();
//   alertError.style.display = "none";
//   const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (!exampleFormControlInput1.value.match(emailRegex)) {
//     alertError.style.display = "block";
//     alertError.innerHTML += "Correo invalido PErro";
//   }
//   if (exampleFormControlTextarea1.value.replaceAll("  ", "").length < 20) {
//     alertError.style.display = "block";
//     alertError.innerHTML += "PErro";
//     exampleFormControlTextarea1.focus();
//   }
// });

btnEnviarEl.addEventListener("click", (e) => {
  e.preventDefault();
  alertError.style.display = "none";
  let valido = 0;
  let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
  if (rfcInputEl.value.match(RFCRegex) == null) {
    alertError.style.display = "block";
    alertError.innerHTML += "El RFC no es válido";
    rfcInputEl.style.border = "2px solid red";
    exampleFormControlTextarea1.focus();
  } else {
    rfcInputEl.style.border = "2px solid green";
    valido++;
  }
  if (valido > 0) {
    setTimeout(() => (rfcInputEl.style.border = ""), 3000);
  }
});
