const calculator = document.querySelector(".calculator");
const display = document.querySelector(".calculator__display");
const keys = document.querySelector(".calculator__keys");

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const calculate = (num1, oprator, num2) => {
      let result = "";

      if (oprator === "add") {
        result = parseFloat(num1) + parseFloat(num2);
      } else if (oprator === "subtract") {
        result = parseFloat(num1) - parseFloat(num2);
      } else if (oprator === "multiply") {
        result = parseFloat(num1) * parseFloat(num2);
      } else if (oprator === "divide") {
        result = parseFloat(num1) / parseFloat(num2);
      }
      return result;
    };

    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNumber = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );

    if (!action) {
      if (
        displayedNumber === "0" ||
        previousKeyType === "oprator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNumber + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      const firstValue = calculator.dataset.firstValue;
      const oprator = calculator.dataset.oprator;
      const secondValue = displayedNumber;

      if (
        firstValue &&
        oprator &&
        previousKeyType !== "oprator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = calculate(firstValue, oprator, secondValue);
        display.textContent = calcValue;

        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNumber;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "oprator";
      calculator.dataset.firstValue = displayedNumber;
      calculator.dataset.oprator = action;
    }

    if (action === "decimal") {
      if (!displayedNumber.includes(".")) {
        display.textContent = displayedNumber + ".";
      } else if (
        previousKeyType === "oprator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue;
      const oprator = calculator.dataset.oprator;
      const secondValue = displayedNumber;

      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNumber;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculate(firstValue, oprator, secondValue);
      }
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculator";
    }

    if (action === "clear") {
      display.textContent = 0;
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      calculator.dataset.previousKeyType = "clear";
    }
    if (action !== "clear") {
      let clearBtn = calculator.querySelector("[data-action-clear]");
      clearBtn.textContent = "CE";
    }
  }
});
