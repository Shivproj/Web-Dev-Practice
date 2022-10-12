//Radio button logic
document.querySelector("#btn").addEventListener("click", check);

function check() {
  if (document.querySelector("#math").checked) console.log("Hi");
  else if (document.querySelector("#physics").checked) console.log("Hello");
  else console.log("bonjour");
}

//Grade Calculator
let box1 = document.querySelector("#box1");
box1.addEventListener("change", calc);
counter = 0;

function calc() {
  let score = box1.value;
  
  let box2 = document.createElement("input");
  box2.id = "Final";
  

  if (counter == 0) {
    add.appendChild(box2);
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
  else {    

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
  counter++;
}
