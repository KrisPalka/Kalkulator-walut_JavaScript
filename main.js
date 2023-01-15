//CONST SECTION
const clickButton = document.getElementById("btn");
const amountInput = document.getElementById("amount_input");
const output = document.getElementById("output");
const select = document.getElementById("currencySelect");

//GET CURRENCY
const url = `https://api.nbp.pl/api/exchangerates/rates/a/`;

const fetchCurrency = (currency) => {
  fetch(url + currency)
    .then((response) => response.json())
    .then((data) => {
      const result = amountInput.value * data.rates[0].mid;
      output.innerText = result.toFixed(2) + " PLN";
    });
};

clickButton.addEventListener("click", calculate);

//ALERT
function calculate() {
  if (amountInput.value < 0) {
    alert("Not possible negative value");
    amountInput.value = 0;
  } else {
    fetchCurrency(select.value);
  }
}
