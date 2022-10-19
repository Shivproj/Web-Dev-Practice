sub = document.querySelector("#submit");
sub.addEventListener("click",onSubmit);
ele = document.querySelector("#ele1");
ele.addEventListener("input",onInput1);
ele = document.querySelector("#ele2");
ele.addEventListener("input",onInput2);
ele = document.querySelector("#ele3");
ele.addEventListener("input",onInput3);
function onInput1() {
    
    if(document.querySelector("#ele1").value) document.querySelector("#name").hidden=true;
    }
function onInput2() {
    
    if(document.querySelector("#ele2").value) document.querySelector("#phone").hidden=true;
 }

function onInput3() {
    
     if(document.querySelector("#ele3").value) document.querySelector("#email").hidden=true; 
    }
        

function validateEmail(email){
    isValid=true;
    message="";
    let x = email.charAt(0);
    let special ="!@#$%^&*()_+-=0123456789";
    let num = email.lastIndexOf(".");
    let len = email.length;
    
    if(!email) {
        isValid=false;
        message="is Required";

    }

    else if(special.includes(x)){
        isValid=false;
        message="email cannot start with special characters";

    }
    else if(email.indexOf("@")!=email.lastIndexOf("@")){
        isValid = false;
        message="Email cannot contain more than one @"}
    else if(len-num<3){
        isValid=false;
        message="not valid domain name";
    }
    

    return {isValid,message};


}
    
    






  
function validatePhone(ph){
    isValid = true;
    message="";
    let x = ph.charAt(0);
    let special ="!@#$%^&*()_+-=";


    if(!ph){
        isValid = false;
        message="is Required";
    }

    
    else if(isNaN(ph) || special.includes(x)) {
            isValid = false;
            message="Please enter a number"
        }
        

    else if(ph.length!=10){
        isValid = false;
        message="Phone number must be of length 10 "
    }    


    return  {isValid,message}
}

function onSubmit() {

const form = document.forms["registration"];
const name = form.name.value;
const phone = form.phone.value;
const email = form.email.value;



if(!name) {
    document.querySelector("#name").hidden = false; 
     
    return;
}
else {
    document.querySelector("#name").hidden = true; 

}
const res = validatePhone(phone)

if(!res.isValid) {
    document.querySelector("#phone").hidden = false;
    document.querySelector("#phone").innerText = res.message;
    
    return;
}
else{
    document.querySelector("#phone").hidden = true;

}

const resemail = validateEmail(email);

if(!resemail.isValid){
    document.querySelector("#email").hidden = false;
    document.querySelector("#email").innerText = resemail.message;
    return;


}
else{
    document.querySelector("#email").hidden=true;
}


console.log(name,phone,email);




}


    

