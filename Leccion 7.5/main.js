
// Valida un número de teléfono
function isValidTelNumber(telNumber) {
   re = new RegExp("[0-9]+\\-[0-9]+\\-?[0-9]+");
   return re.test(telNumber);
}

// Valida una fecha
function isValidDate(date) {
   re = new RegExp("^([0-2][0-9]|3[0-1])(-)(0[1-9]|1[0-2])\\2(\\d{4})$");
   return re.test(date);
}

function onlyThreeDigits(number) {
   re = new RegExp("[0-9]{3}");
   return re.test(number);
}

console.log(isValidTelNumber("000-0000-000")); // true
console.log(isValidDate("10-09-1999")); // true
console.log(onlyThreeDigits("12")); // true