//Note: I used  function callback concept here

function value1() {
  let v1 = document.querySelector("#input1").value;

  return parseFloat(v1);
}
function value2() {
  let v2 = document.querySelector("#input2").value;
  return parseFloat(v2);
}

function sum(value1, value2) {
  document.querySelector("#result").value = value1() + value2();
}

function sub(value1, value2) {
  document.querySelector("#result").value = value1() - value2();
}
function mul(value1, value2) {
  document.querySelector("#result").value = value1() * value2();
}
