//Radio button logic (only works with button)

document.querySelector("#math").addEventListener("change",check)
document.querySelector("#physics").addEventListener("change",check)
document.querySelector("#chemistry").addEventListener("change",check)

function check() {
  if (document.querySelector("#math").checked) return console.log("Maths")
  else if (document.querySelector("#physics").checked) console.log("Physics")
  else console.log("Chemistry")
}

//Grade Calculator
let box1 = document.querySelector("#box1");// <let> This works because function is being "called" outside in line 13


box1.addEventListener("change", calc);
counter = 0;


function calc() {
    let score = box1.value;
 
  
  let box2 = document.createElement("input");
  box2.id = "Final";
  const label = document.createElement("label");
  label.innerText = "Your grade is : "

  

  if (counter == 0) {
    add.appendChild(label);

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
