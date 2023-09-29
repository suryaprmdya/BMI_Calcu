let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

function CalculateBMI(weight, height) {

    let bmi = weight/(height/100)** 2;
    bmi = bmi.toFixed(1);
    
    return bmi;
};

function categoryBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 24.9) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

let bmi = CalculateBMI(weight, height);
let kategori = categoryBMI(bmi);

let result = document.getElementById('result');

let resultStyled = `
    <p>Your BMI is 
    <span style="font-size: 18; font-weight:600">${bmi}</span> 
    which means You are 
    <span <span style="font-size: 18; font-weight:600">${kategori}</span></p>
`;

result.innerHTML = resultStyled;
