let check = document.querySelectorAll(".checkbox");
check.forEach((item)=>item.addEventListener("change",checkFunction));



function checkFunction(event){
    if(event.target.checked){
        
        console.log(`Hi+${event.target.id}`);
    }
    else if(event.target.checked){
        
        console.log(`Hi+${event.target.id}`);
    }
}