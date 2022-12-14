"use strict";
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("num-of-people");
const reset = document.querySelector(".reset-btn");
const tipBtn = document.querySelectorAll(".tip");
const tip5percent = document.querySelector(".tip5");
const tip10percent = document.querySelector(".tip10");
const tip15percent = document.querySelector(".tip15");
const tip25percent = document.querySelector(".tip25");
const tip50percent = document.querySelector(".tip50");
const tipCustom = document.querySelector(".custom-tip");
const customInput = document.getElementById("custom-input");
const tipPerPerson = document.querySelector(".tip-amount-num");
const totalPerPerson = document.querySelector(".total-amount-num");
function updateTotal() {
    let billValue = parseFloat(billInput.value);
    let tipValue = parseFloat(tipPerPerson.innerHTML.slice(1));
    let peopleValue = peopleInput.value;
    totalPerPerson.textContent = `$${(billValue + tipValue) / peopleValue}`;
}
function resetValues() {
    billInput.value = 0;
    peopleInput.value = 1;
    tipPerPerson.textContent = `$${0.0}`;
    updateTotal();
}
billInput.addEventListener("input", (e) => {
    updateTotal();
    if (parseFloat(e.target.value) <= 0) {
        billInput.style.borderColor = "red";
    }
    else {
        billInput.style.borderColor = "hsl(172, 67%, 45%)";
    }
});
peopleInput.addEventListener("input", (e) => {
    updateTotal();
    if (parseFloat(e.target.value) <= 0) {
        peopleInput.style.borderColor = "red";
    }
    else {
        peopleInput.style.borderColor = "hsl(172, 67%, 45%)";
    }
});
reset.addEventListener("click", resetValues);
tipBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        tipPerPerson.textContent = `$${0.0}`;
        tipPerPerson.textContent =
            "$" + billInput.value * (parseFloat(btn.innerHTML) / 100);
        updateTotal();
    });
});
customInput === null || customInput === void 0 ? void 0 : customInput.addEventListener("input", (e) => {
    tipPerPerson.textContent = `$${0.0}`;
    tipPerPerson.textContent = "$" + (billInput.value * e.target.value) / 100;
    updateTotal();
});
//# sourceMappingURL=app.js.map