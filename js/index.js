function getNumber(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

let num1;
let num2;

for (; true; ) {

  num1 = +prompt("Get number 1");

  if (!isNaN(num1)) {
    break;
  } else {
    alert("Not a number");
    continue;
  }
}

for (; true; ) {

  num2 = +prompt("Get number 2");

  if (!isNaN(num2)) {
    break;
  } else {
    alert("Not a number");
    continue;
  }
}

document.write(getNumber(num1, num2));
