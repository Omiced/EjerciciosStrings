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
