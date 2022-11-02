document.querySelector("#text").addEventListener("change",change);
document.querySelector("#text").addEventListener("blur",blur);
document.querySelector("#button").addEventListener("click",click);
document.querySelector("#button").addEventListener("mouseover",mouseOver);
document.querySelector("#button").addEventListener("mouseout",mouseOut);


function change(){
    console.log("This is on change")

}
function blur(){
console.log("This is on blur")
}
function click(){
    console.log("This is on click")

}
function mouseOver(){
    console.log("This is on mouse over")

}
function mouseOut(){
    console.log("This is on mouse out")

}

