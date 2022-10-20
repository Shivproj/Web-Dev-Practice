
document.querySelector("#submit").addEventListener("click", submit);
function validName(name){
    let isValid = true;
    let message = "";
    let len = name.length;
    if(!name){
        isValid = false;
        message = "is Required";

    }
    else if(!isNaN(name)){
        isValid = false;
        message="name must not include numbers";
    }
    else if(len>20 || len<3){
        isValid = false;
        message="name must be between 3 and 20 characters long"
    }
    return {isValid, message};
}

function validQualification(qualification){
    let isValid = true;
    let message = "";
    if(!qualification){
        isValid = false;
        message = "is Required";
    }
    else if(qualification=="Choose your Qualification"){
        isValid = false;
        message="choose your qualification ";
    }
    return{isValid, message}


}
function validAge(age){
    let isValid=true;
    let message="";
    if(!age){
        isValid=false;
         message="is Required";
    }
    else if(isNaN(age)){
        isValid=false;
         message="age should be a number";

    }
    else if(age<10 || age>99){
        isValid=false;
        message="enter a valid age";
    }
    return{isValid,message};

}



function submit(){
    const form = document.forms["registration"];
    const name = form.name.value;
    const qualification = form.select.value;
    const age = form.age.value;
    const gender = form.gender.value;
    const nameCheck = validName(name);
    const qualificationCheck = validQualification(qualification);
    const ageCheck = validAge(age);
    

    if(!nameCheck.isValid){
        document.querySelector("#name").innerText = nameCheck.message;
        document.querySelector("#name").hidden = false;
        return;
    }
    else{
        document.querySelector("#name").hidden = true;

    }
    if(!qualificationCheck.isValid){
        document.querySelector("#selectquali").innerText = qualificationCheck.message;
        document.querySelector("#selectquali").hidden = false;
        return;

    }
    else{
        document.querySelector("#selectquali").hidden = true;

    }
    if(!ageCheck.isValid){
        document.querySelector("#age").innerText = ageCheck.message;
        document.querySelector("#age").hidden = false;
        return;

    }
    else{
        document.querySelector("#age").hidden = true;
        
    }
    if(!gender){
        document.querySelector("#gender").hidden = false;
        document.querySelector("#gender").innerText="Please select a gender";
        return;
    }
    
    console.log(name,qualification,age,gender);

}
