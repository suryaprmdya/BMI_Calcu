let inputWeight = document.getElementById("weight");
let inputHeight = document.getElementById("height");

function getWeight() {
    return parseFloat(inputWeight.value);
}

function getHeight() {
    return parseFloat(inputHeight.value);
}

function calculateBMI(weight, height) {
    let bmi = weight / (height / 100) ** 2;
    bmi = bmi.toFixed(1);
    return bmi;
}

function categoryBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

let submit = document.getElementById("btn-submit");

submit.addEventListener("click", function(event) {
    event.preventDefault();

    let weight = getWeight();
    let height = getHeight();

    let bmi = calculateBMI(weight, height);
    let category = categoryBMI(bmi);

    let result = document.getElementById('result');

    let resultStyled = `
        <p>Your BMI is 
        <span style="font-size: 18; font-weight: 600">${bmi}</span> 
        which means you are 
        <span style="font-size: 18; font-weight: 600">${category}</span>
        </p>
    `;

    result.innerHTML = resultStyled;
});

let reset = document.getElementById("btn-reset");

reset.addEventListener("click", function() {
    window.location.reload();
})