//Calculator

//Add Function

function add(a, b) {
  return a + b;
}
function sub(s, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b == 0) return "Divisible by zero is Possible ";
  else return a / b;
}

function Calculator() {
  let choice = prompt(
    "Choose the Operations from below menu: \n1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n Enter your option 1 , 2 , 3 or 4"
  );
  let a = parseFloat(prompt("Enter the first number"));
  let b = parseFloat(prompt("Enter the Second number"));
  let res;

  switch (choice) {
    case "1":
      res = add(a, b);
      break;
    case "2":
      res = sub(a, b);
      break;
    case "3":
      res = mul(a, b);
      break;
    case "4":
      res = div(a, b);
      break;
    default:
      console.log("Enter a valid op");
      return;
  }

  console.log("Result is : " + res);
}

Calculator();
