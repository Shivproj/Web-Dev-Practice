function add(){
    let a =document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").value = parseFloat(a)+parseFloat(b);


}
function sub(){
    let a =document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").value = a-b;


}
function mul(){
    let a =document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").value = a*b;


}
function div(){
    let a =document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById("result").value = a/b;


}


function color(){

    let color = document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}
function cap(){

    s = document.getElementById("p1").innerText
    document.getElementById("p1").innerText = s.toUpperCase();
}
function small(){
    s = document.getElementById("p1").innerText
    document.getElementById("p1").innerText = s.toLowerCase();
}

