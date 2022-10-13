let students = [];
let btn1 = document.querySelector("#submit");
btn1.addEventListener("click", getData);

function getData() {
  let obj = {};
  obj.FirstName = document.querySelector("#fname").value;
  obj.LastName = document.querySelector("#lname").value;

  students.push(obj);
}

let btn2 = document.querySelector("#display");
btn2.addEventListener("click", showData);
function showData() {
  console.log(students);
}

let findx = document.querySelector("#find");
findx.addEventListener("change", finds);

function finds() {
  let found = students.find(function (item) {
    return findx.value == item.FirstName || findx.value == item.LastName;
  });

  console.log(found);
}

let filterx = document.querySelector("#filter");
filterx.addEventListener("change", filters);
function filters() {
  let filtered = students.filter(function (item) {
    return item.FirstName == "Sai" || item.LastName == "Sai";
  });

  console.log(filtered);
}
