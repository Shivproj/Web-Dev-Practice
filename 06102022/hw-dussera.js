function calc(age) {
  age = document.querySelector("#age").value;
  if (age >= 18) document.querySelector("#result").value = check(age);
 
  else document.querySelector("#result").value = "Less than 18!";
}

function check(age) {
  if (age % 2 == 0) return "Even";
  else return "Odd";
}
