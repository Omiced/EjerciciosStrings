const btnEnviarEl = document.querySelector("#btn-enviar");
const exampleFormControlInput1 = document.getElementById(
  "exampleFormControlInput1"
);
const exampleFormControlTextarea1 = document.getElementById(
  "exampleFormControlTextarea1"
);
const alertError = document.getElementById("alert");
btnEnviarEl.addEventListener("click", (e) => {
  e.preventDefault();
  alertError.style.display = "none";
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!exampleFormControlInput1.value.match(emailRegex)) {
    alertError.style.display = "block";
    alertError.innerHTML += "Correo invalido PErro";
  }
  if (exampleFormControlTextarea1.value.replaceAll("  ", "").length < 20) {
    alertError.style.display = "block";
    alertError.innerHTML += "PErro";
    exampleFormControlTextarea1.focus();
  }
});
