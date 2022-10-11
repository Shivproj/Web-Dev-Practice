let node = document.createElement("p");
node.innerText="Please submit the form";
document.body.appendChild(node);

function submit(){
    let obj={FirstName:" ",LastName:" ",Email:" ",Phone:" ",GenderMale:" ",GenderFemale:" ",Grade:" ",Subject:" "}
    obj.FirstName=document.querySelector("#fname").value;
    obj.LastName=document.querySelector("#lname").value;
    obj.Email=document.querySelector("#email").value;
    obj.Phone=document.querySelector("#phn").value;
    obj.GenderMale=document.querySelector("#chkm").checked;
    obj.GenderFemale=document.querySelector("#chkf").checked;
    obj.Grade=document.querySelector("#grade").value;
    obj.Subject=CheckButton();    
    
    console.log(obj);
//     node.innerText="Congrats!";
//     let node2 = document.createElement("button");

//     node2.setAttribute("id","btn2");
//     node2.innerHTML="Set more";
//     document.getElementById("btn2").style.background="green";

//     document.body.appendChild(node2);
    
    
    
  

    
// }
}
function CheckButton() {
    if(document.querySelector("#Maths").checked) return  "Maths";
    else if(document.querySelector("#Physics").checked) return "Physics";
    else return "Social";
}