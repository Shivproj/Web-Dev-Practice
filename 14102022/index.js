const arr = [];
let btn1 = document.querySelector("#submit");
btn1.addEventListener("click", submit);
let btn2 = document.querySelector("#display");
btn2.addEventListener("click", display);
let btn3 = document.querySelector("#find");
btn3.addEventListener("click", finds);
let btn4 = document.querySelector("#filter");
btn4.addEventListener("click", filters);
let btn5 = document.querySelector("#forEach");
btn5.addEventListener("click", forEachs);

function submit() {
  let obj = {};
  obj.RollNo = document.querySelector("#roll").value;
  obj.Name = document.querySelector("#name").value;
  obj.Age = document.querySelector("#age").value;
  obj.Email = document.querySelector("#email").value;
  obj.Grade=document.querySelector("#grade").value;
  obj.Marks = document.querySelector("#marks").value;

  arr.push(obj);
}

function display() {
  console.log(arr);
}
function finds() {
  let found = arr.find(function (item) {
    return item.Marks > 80;
  });
  console.log(found);
}
function filters() {
  let filtered = arr.filter(function (item) {
    return item.Marks > 70;
  });
  console.log(filtered);
}
function forEachs() {
  arr.forEach(function (item) {
    if (item.Age > 19) console.log(item);
  });
}
