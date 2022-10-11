//calculator
let add = document.querySelector("#add");
add.addEventListener("click", addition);

let sub = document.querySelector("#sub");
sub.addEventListener("click", subtraction);

let mul = document.querySelector("#mul");
mul.addEventListener("click", multiplication);

let div = document.querySelector("#div");
div.addEventListener("click", division);

let mod = document.querySelector("#mod");
mod.addEventListener("click", modulus);

function addition() {
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let res = parseFloat(inp1) + parseFloat(inp2);

  document.querySelector("#result").value = res;
}
function subtraction() {
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let res = inp1 - inp2;

  document.querySelector("#result").value = res;
}
function multiplication() {
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let res = inp1 * inp2;

  document.querySelector("#result").value = res;
}
function division() {
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let res = inp1 / inp2;

  document.querySelector("#result").value = res;
}
function modulus() {
  let inp1 = document.querySelector("#input1").value;
  let inp2 = document.querySelector("#input2").value;
  let res = inp1 % inp2;

  document.querySelector("#result").value = res;
}
//bg color of result box

let color = document.querySelector("#color");
color.addEventListener("change", colors);

function colors() {
  document.querySelector("#result").style.backgroundColor = color.value;
}
//saving data

let submit = document.querySelector("#save");
submit.addEventListener("click", save);

function save() {
  obj = {
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    MaleGender: "",
    FemaleGender: "",
  };
  obj.FirstName = document.querySelector("#fname").value;
  obj.LastName = document.querySelector("#lname").value;
  obj.PhoneNumber = document.querySelector("#phone").value;
  obj.MaleGender = document.querySelector("#mgender").checked;
  obj.FemaleGender = document.querySelector("#fgender").checked;

  console.log(obj);
}

let magic = document.querySelector("#magic");
let node = document.createElement("div");
node.innerText = "Select color";
document.querySelector("#colorbox").appendChild(node);

magic.addEventListener("click", function f1() {
  document.querySelector("div").style.backgroundColor = "black";
});
magic.addEventListener("mouseover", function f2() {
  document.querySelector("div").style.backgroundColor = "red";
});
magic.addEventListener("mouseout", function f3() {
  document.querySelector("div").style.backgroundColor = "blue";
});
magic.addEventListener("keyup", function f4() {
  document.querySelector("div").style.backgroundColor = "cyan";
});
magic.addEventListener("keydown", function f5() {
  document.querySelector("div").style.backgroundColor = "purple";
});

//Grade Calculator

let mark = document.querySelector("#marks");

mark.addEventListener("input", calc);
let box = document.createElement("input");
document.querySelector("#calc").appendChild(box);
box.id = "Final";

function calc() {
  let score = parseFloat(mark.value);

  if (score > 99 || score < 0) {
    alert("Please enter a valid number");
  } else {
    if (score >= 80) {
      document.querySelector("#Final").value = "A";
    } else if (60 <= score && score < 80) {
      document.querySelector("#Final").value = "B";
    } else if (35 <= score && score < 60) {
      document.querySelector("#Final").value = "C";
    } else {
      document.querySelector("#Final").value = "D";
    }
  }
}
