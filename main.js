const numero_km = parseInt(prompt('Inserisci quanti km vuoi percorrere'));
console.log(numero_km);

const age = parseInt(prompt('Inserisci la tua età'));
console.log(age);

const km_price = 0.21;

let result = numero_km * km_price;
console.log(result)

const sales20 = 0.2;
const sales40 = 0.4;

let final_price
if (age < 18) {
    final_price = result - (result * sales20);
} else if (age >= 65) {
    final_price = result - (result * sales40);
} else {
    final_price = result
}
console.log(final_price)

document.getElementById('prezzo_biglietto').innerHTML = final_price.toPrecision(2) + "&euro;";