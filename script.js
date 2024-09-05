const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".errorMessage");
let daysOut = document.getElementById("daysOutput");
let monthsOut = document.getElementById("monthsOutput");
let yearsOut = document.getElementById("yearsOutput");
const submitButton = document.querySelector("button");

let today, todayDate, todayMonth, todayYear;
let dayVal, monthVal, yearVal;

let valid;

function isEmpty() {
    inputs.forEach((input, index) => {
        input.value === "" ? errorDisplay(true, index, "This field is required") : errorDisplay(false, index);
        if (input.value === "") valid = false;
    })
}

function errorDisplay(bool, index, message = "This field is required") {
    if (bool) {
        inputs[index].style.borderColor = "var(--light-red)";
        errors[index].style.visibility = "visible";
        errors[index].textContent = message;
    }
    else {
        inputs[index].style.borderColor = "var(--light-grey)";
        errors[index].style.visibility = "hidden";
    }
}

function getMonthDays(month, year) {
    switch (month) {
        case 2:
            return isLeapYear(year) ? 29 : 28;

        case 4: case 6: case 9: case 11:
            return 30;

        default:
            return 31;

    }
}

function isLeapYear(year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
}

function dateValidation() {
    today = new Date();
    todayDate = today.getDate();
    todayMonth = today.getMonth() + 1;
    todayYear = today.getFullYear();
    valid = true;
    dayVal = parseInt(inputs[0].value);
    monthVal = parseInt(inputs[1].value);
    yearVal = parseInt(inputs[2].value);

    /* Year Validation*/

    if (yearVal > todayYear) {
        errorDisplay(true, 2, "Must be in the past");
        valid = false;
    }
    else if (yearVal < 0) {
        errorDisplay(true, 2, "Must be a valid year");
        valid = false;
    }
    else {
        errorDisplay(false, 2);
    }

    /*Month Validation*/

    if (monthVal < 1 || monthVal > 12) {
        errorDisplay(true, 1, "Must be a valid month");
        valid = false;
    }
    else {
        errorDisplay(false, 1);
        if (yearVal === todayYear && monthVal > todayMonth) {
            errorDisplay(true, 2, "");
            errorDisplay(true, 1, "Must be in the past");
            valid = false;
        }

    }

    /*Day Validation*/

    if (dayVal < 1 || dayVal > getMonthDays(monthVal, yearVal)) {
        errorDisplay(true, 0, "Must be a valid date");
        valid = false;
    }
    else {
        errorDisplay(false, 0);
        if (yearVal === todayYear && monthVal === todayMonth && dayVal > todayDate) {
            errorDisplay(true, 0, "Must be in the past");
            errorDisplay(true, 1, "");
            errorDisplay(true, 2, "");
            valid = false;
        }
    }
}

function ageCalculation() {
    if (valid) {

        let yearDiff = todayYear - yearVal;
        let monthDiff = todayMonth - monthVal;
        let dayDiff = todayDate - dayVal;

        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }

        if (dayDiff < 0) {
            monthDiff--;
            if(monthDiff < 0){
                monthDiff+=12;
                yearDiff--;
            }
            if (todayMonth != 1) {
                dayDiff += getMonthDays(todayMonth - 1, todayYear);
            }
            else {
                dayDiff += 31
            }
        }

        function dateOutput(output, dateDiff){
            for(let i = 0; i <= dateDiff; i++){
                setTimeout(()=>{
                    output.textContent = i;
                }, i * 10)
            }
        }

        dateOutput(yearsOut, yearDiff);
        dateOutput(monthsOut, monthDiff);
        dateOutput(daysOut, dayDiff);
    }
}

inputs.forEach((input) => {
    input.addEventListener("input", dateValidation)
})

submitButton.addEventListener("click", () => {
    isEmpty();
    ageCalculation();

});

