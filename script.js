let inputs = document.querySelectorAll("input");
let errors = document.getElementsByClassName("errorMessage");
let arrowButton = document.querySelector("button");
let monthsAndDays = [];

for (month = 1; month <= 12; month++) {
    if (month < 8) monthsAndDays.push({ month: month, days: (month % 2 != 0) ? 31 : 30 });
    else monthsAndDays.push({ month: month, days: (month % 2 == 0) ? 31 : 30 });
}
monthsAndDays[1].days = 28;

function isEmpty() {
    for (input = 0; input < inputs.length; input++) {
        (inputs[input].value === "") ? errorDisplay(true) : errorDisplay(false); 
    }
}

function errorDisplay(bool) {
    if (bool === true) {
        inputs[input].style.borderColor = "var(--light-red)";
        errors[input].style.visibility = "visible";
    }
    else {
        inputs[input].style.borderColor = "var(--light-grey)";
        errors[input].style.visibility = "hidden";
    }
}

function isLeapYear(year) {
    return ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
}

arrowButton.addEventListener("click", isEmpty)