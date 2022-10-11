let node = document.createElement("p");
node.setAttribute("id", "p1");
document.body.appendChild(node);
let node1 = document.createElement("p");
node1.setAttribute("id", "p2");
document.body.appendChild(node1);
function onInput(e) {
  let data = document.getElementById("text").value;

  node.innerText = data;
 
}




var counter = 99;
function count(e) {
  document.getElementById("p2").innerText = counter++;
}
function subtract(e) {
  counter = counter-2;
  document.getElementById("p2").innerText = counter;
}





function onFocus(e){
  document.getElementById("p1").style.color="black";

}
function onBlur(e){
 
  document.getElementById("p1").style.color="blue";
  
  }


