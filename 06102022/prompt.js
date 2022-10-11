let num1 = prompt("Enter first number: ");
let num2 = prompt("Enter second number: ");




(function (m,n) {
    
    console.log(parseFloat(m) + parseFloat(n));
    console.log(m*n);
    console.log(m%n);
    console.log(m-n);
    document.querySelector("#input").innerHTML = parseFloat(m) + parseFloat(n);   
    document.querySelector("#input").innerHTML += "<br/>"
    document.querySelector("#input").innerHTML += m*n;
    document.querySelector("#input").innerHTML += "<br/>"
    document.querySelector("#input").innerHTML += m-n;
    document.querySelector("#input").innerHTML += "<br/>"
    document.querySelector("#input").innerHTML += m%n;
    document.querySelector("#input").innerHTML += "<br/>"


})(num1,num2);