function submit(){
    let obj ={FirstName:"" ,LastName:"",Email:"",Gender:""}
    obj.FirstName = document.querySelector("#fname").value.toUpperCase();
    
    obj.LastName=document.querySelector("#lname").value.toUpperCase();
    obj.Email= document.querySelector("#email").value.toUpperCase();
    obj.Gender=document.querySelector("#gender").value.toUpperCase();
    
    console.log(obj);


}