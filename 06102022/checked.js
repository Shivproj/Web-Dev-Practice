
function submit(){
    
    let obj={name:" ",phno:" ",email:" ",check:" ",gender:" "}
    obj.name= document.querySelector("#name").value;
    obj.phno = document.querySelector("#phno").value;
    obj.email= document.querySelector("#email").value;
    obj.check = document.querySelector("#check").checked;    
    obj.gender = document.querySelector("#gender").value;

   


    
    console.log(obj);
    


}
function check(){
    if(document.querySelector("#name").value.length>0){
    console.log(document.querySelector("#check").checked);}
    else{
        
    alert("False");}
}