let inputs = document.querySelectorAll("input");
let errors = document.getElementsByClassName("errorMessage");
let arrowButton = document.querySelector("button");

function isEmpty() {
    for (input = 0; input < inputs.length; input++) {
        (inputs[input].value === "") ? errorDisplay(true) : errorDisplay(false);
        errors[input].textContent = "This field is required";
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

function dateValidation(){
    
}

function ageCalculation(){
    let today = new Date();
    let birthDate = new Date(parseInt(inputs[2].value), parseInt(inputs[1].value), parseInt(inputs[0].value));

}

arrowButton.addEventListener("click", () =>{
    isEmpty()
    ageCalculation()
})