let buttonClick = document.getElementById('btn');
const container = document.getElementById("container");
const operatorValue = document.getElementById('operatorvalue');
let selectedOperator;

operatorValue.addEventListener("click", (event) => {
    if (event.target.matches('.button')) {
        selectedOperator = event.target.value;
    }
});

function calculator(operator,num1,num2){
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Toodles!!';
    }
}


function calculate() {
    let Num1 = Number(document.getElementById('input1').value);
    let Num2 = Number(document.getElementById('input2').value);
    console.log(Num1,selectedOperator,Num2);
    let calculatedValue = calculator(selectedOperator,Num1,Num2);
    console.log(calculatedValue);
    const result = document.createElement('p');
    result.setAttribute("class", "heading");
    result.innerText = `Result is ${calculatedValue}`;
    container.appendChild(result);
}

buttonClick.addEventListener('click',calculate);

