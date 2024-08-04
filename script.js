const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".errorMessage");
const submitButton = document.querySelector("button");


let today, todayDate, todayMonth, todayYear;

let dayVal, monthVal, yearVal;

let valid = false;

function isEmpty() {
    inputs.forEach((input, index) => {
        input.value === "" ? errorDisplay(true, index) : errorDisplay(false, index);
    })
        (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") ? valid = false : valid = true;
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

function isLeapYear(year) {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
}

function dateValidation() {
    today = new Date();
    todayDate = today.getDate();
    todayMonth = today.getMonth();
    todayYear = today.getFullYear();
    dayVal = inputs[0].value;
    monthVal = inputs[1].value;
    yearVal = inputs[2].value;
    let fieldName;
    inputs.forEach((input, index)=>{
        switch(index){
            case 0:
                fieldName = "day";
                break;
            case 1:
                fieldName = "month";
                break;
            case 2:
                fieldName = "year";
                break;
        }
        ((input.value <= 0 && input.value !== "") || (input.value > 12 && index === 1) || (input.value > 31 && index === 0)) ? errorDisplay(true, index, `Must be a valid ${fieldName}`) : errorDisplay(false, index);
    
    })
    if(yearVal > todayYear) errorDisplay(true, 2, "Must be in the past");
    else if(yearVal > 0) errorDisplay(false, 2);


}

inputs.forEach((input) => {
    input.addEventListener("input", dateValidation)
})