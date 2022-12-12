const repeated = function (str) {
  const strN = str.toLowerCase();
  let repetida = "";
  let numRep = 0;
  for (let i = 0; i < strN.length; i++) {
    for (let j = i + 1; j < strN.length; j++) {
      if (strN.charAt(i) == strN.charAt(j)) {
        repetida = strN.charAt(i);
        numRep++;
      }
    }
  }
  return { repetida, numRep };
};

console.log(repeated("Abraham"));

const reverseString = function (str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};
console.log(reverseString("Cano"));

const esPalindromo = function (str) {
  const strN = str.toLowerCase().replace(/ /g, "");
  return strN == reverseString(strN) ? "Es Palindromo" : "No es";
};

console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Perro"));
console.log(esPalindromo("Reconocer"));
console.log(esPalindromo("Josue"));
