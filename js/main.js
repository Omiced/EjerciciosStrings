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
  if (exampleFormControlTextarea1.value.replaceAll("  ", "").length < 20) {
    alertError.style.display = "block";
    alertError.textContent = "PErro";
    exampleFormControlTextarea1.focus();
  }
});
