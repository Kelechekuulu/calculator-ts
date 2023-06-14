console.log("hello world");
var inputFirst = document.createElement("input");
inputFirst.type = "number";
var inputSecond = document.createElement("input");
inputSecond.type = "number";
var button = document.createElement("button");
button.textContent = "+";
var minusbutton = document.createElement("button");
minusbutton.textContent = "-";
var multiplicationbutton = document.createElement("button");
multiplicationbutton.textContent = "*";
var divisionbutton = document.createElement("button");
divisionbutton.textContent = "/";
var h1 = document.createElement("h1");
h1.className = "h1";
var calculate = function (symbol) {
    var firstNumber = +inputFirst.value;
    var secondNumber = +inputSecond.value;
    var sum;
    if (symbol === "+") {
        sum = firstNumber + secondNumber;
        h1.innerText = "Result:".concat(sum);
    }
    else if (symbol === "-") {
        sum = firstNumber - secondNumber;
        h1.innerText = "Result:".concat(sum);
    }
    else if (symbol === "*") {
        sum = firstNumber * secondNumber;
        h1.innerText = "Result:".concat(sum);
    }
    else if (symbol === "/") {
        sum = firstNumber / secondNumber;
        h1.innerText = "Result:".concat(sum);
    }
    inputFirst.value = "";
    inputSecond.value = "";
    document.body.append(h1);
};
button.addEventListener("click", function () { return calculate("+"); });
minusbutton.addEventListener("click", function () { return calculate("-"); });
multiplicationbutton.addEventListener("click", function () { return calculate("*"); });
divisionbutton.addEventListener("click", function () { return calculate("/"); });
document.body.append(inputFirst, inputSecond, button, minusbutton, multiplicationbutton, divisionbutton);
