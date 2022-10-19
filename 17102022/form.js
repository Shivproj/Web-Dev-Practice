document.designMode = 'off';

sub = document.querySelector("#submit");
sub.addEventListener("click",onSubmit);
let count =0;
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
        
  


function onSubmit() {

const form = document.forms["registration"];
const name = form.name.value;
const phone = form.phone.value;
const email = form.email.value;



if(!name) {
    document.querySelector("#name").hidden = false; 
     
    return;
}
else if(!phone) {
    document.querySelector("#phone").hidden = false;
    return;
}

else if (!email) {
    document.querySelector("#email").hidden = false;
    return;
}
else  console.log(name,phone,email);




}


    

