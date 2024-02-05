// checked property in javascript

const isChecked = document.getElementById("myCheckbox");
const visaSelected = document.getElementById("myVisa");
const masterSelected = document.getElementById("myMaster");
const paypalSelected = document.getElementById("myPaypal");
const myButton = document.getElementById("myBtn");
const para1 = document.getElementById("p1");
const para2 = document.getElementById("p2");

myButton.onclick = function() {
  if (isChecked.checked) {
    para1.textContent = "You are SUBSCRIBED"
  }
  else {
    para1.textContent = "You are NOT SUBSCRIBED"
  }

  if (visaSelected.checked) {
    para2.textContent = "You have selected VISA for payment"
  }
  else if (masterSelected.checked) {
    para2.textContent = "You have selected Master Card for payment"
  }
  else if (paypalSelected.checked) {
    para2.textContent = "You have selected Paypal for payment"
  }
  else {
    para2.textContent = "You have NOT selected any form of payment"
  }
}