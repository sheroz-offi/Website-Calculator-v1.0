let dc = document;
let input = dc.querySelector(".input");
let buttons = dc.querySelectorAll(".button");
let clearButton = dc.getElementById("clear");
let BtnMoonSun = dc.querySelector(".btn");
let ImgMoonSun = dc.querySelector(".img-sunmoon");
let ImgLogo = dc.querySelector(".img-loogo");
let Calculate = dc.querySelector(".calcul");
let num1 = "";
let num2 = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.value;

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      operator = value;
      input.value = "";
    }

    if (value === "=") {
      let result = calculate(parseFloat(num1), parseFloat(num2));
      input.value = result;
      num1 = result.toString();
      num2 = "";
      operator = "";
    }

    if (!isNaN(value) || value === ".") {
      if (operator === "") {
        num1 += value;
        input.value = num1;
      } else {
        num2 += value;
        input.value = num2;
      }
    }
  });
});

function calculate(num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    default:
      return "";
  }
}

clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  input.value = "0";
});

BtnMoonSun.addEventListener("click", () => {
  if (BtnMoonSun.classList.contains("moon")) {
    BtnMoonSun.classList.add("sun");
    BtnMoonSun.classList.remove("moon");
    ImgMoonSun.src = "img/btn-mon.png";
    ImgLogo.src = "img/bg-logo-ubba.svg";
    Calculate.style.background = "#4A4A4A";
  } else {
    BtnMoonSun.classList.add("moon");
    BtnMoonSun.classList.remove("sun");
    ImgMoonSun.src = "img/btn-sun.png";
    Calculate.style.background = "#1c1c1c";
    ImgLogo.src = "img/white-logo-ubba.svg";
  }
});
