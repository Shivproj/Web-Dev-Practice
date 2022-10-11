function f1(){
    console.log("First Name is : " + document.querySelector("#fname").value)
    

}
function f2(){
    console.log("Last Name is : " + document.querySelector("#lname").value)

}
function f3(){
    console.log("Phone Number is : " + document.querySelector("#phno").value)

}

      
function f4() {
    var x = document.getElementById("grades").options.length;
    document.getElementById("grades").size = x;
}
function f5(){
    let obj = {FirstName:"",LastName:"",PhoneNumber:"",Grade:""}
    obj.FirstName=document.querySelector("#fname").value;
    obj.LastName=document.querySelector("#lname").value;
    obj.PhoneNumber=document.querySelector("#phno").value;
    obj.Grade=document.querySelector("#grades").value;
    console.log(obj);
}
