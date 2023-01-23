let buttonClick = document.getElementById('btn');
const container = document.getElementById("container");
const operatorValue = document.getElementById('operatorvalue');

operatorValue.addEventListener("click", (event) => {
    if (event.target.matches('.button')) {
        console.log (event.target.value);
        let selectedOperator = event.target.value;
        return selectedOperator;
    }
});

function calculator(num1,num2){
    switch (selectedOperator) {
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
    let calculatedValue = calculator(Num1,Num2);
    console.log(calculatedValue);
    const result = document.createElement('p');
    result.setAttribute("class", "heading");
    result.innerText = `Result is ${calculatedValue}`;
    container.appendChild(result);
}

buttonClick.addEventListener('click',calculate)

