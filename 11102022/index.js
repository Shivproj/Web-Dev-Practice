//using event listener
const ip1 = document.querySelector("input");
ip1.addEventListener("input", check);

function check() {
  const n = ip1.value;
  if (n % 2 == 0) document.querySelector("#result").value = "Even";
  else document.querySelector("#result").value = "Odd";
}
