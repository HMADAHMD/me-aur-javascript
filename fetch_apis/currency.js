const currencyValue = document.querySelector('#currencyInput')
const requiredValue = document.querySelector('#currencyOutput')
const amountValue = document.querySelector('#amount')
const myButton = document.querySelector('#mybtn')
const result = document.querySelector('#myH2')

const URL = 'https://api.freecurrencyapi.com/v1/latest?'
const apiKey = "apikey=fca_live_upAgSdwUSWvqIN70m7sMhgWnfkTpJ35DPmkMqHRu"

const getCurrency = () => { 
  fetch(URL+apiKey + `&currencies=${requiredValue.value}&base_currency=${currencyValue.value}`).
  then((response) => {
    return response.json()
  }).
  then((data) => {
    console.log(data);
    let resObject = data
    let value = resObject.data[requiredValue.value]
    let finalValue = value * amountValue.value
    result.innerText = finalValue.toFixed(2)
  }).
  catch((error) => {
    console.log("Error: " + error);
  }).
  finally(() => {

  })
}

myButton.addEventListener("click", getCurrency)

