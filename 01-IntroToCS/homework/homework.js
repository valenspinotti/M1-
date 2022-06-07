'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var decimal = 0
  var numero = num.split('').reverse();
  for (let i = 0; i < numero.length; i++){
    decimal += numero[i] * Math.pow(2, i);
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}