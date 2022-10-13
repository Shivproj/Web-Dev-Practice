let students=[];
let btn1 = document.querySelector("#submit");
btn1.addEventListener("click",getData)

function getData() {
    let obj={};    
    obj.FirstName= document.querySelector("#fname").value;
    obj.LastName=document.querySelector("#lname").value;

    students.push(obj);
}

let btn2 = document.querySelector("#display");
btn2.addEventListener("click",showData)
function showData() {
    console.log(students);
}


let findx = document.querySelector("#find");
findx.addEventListener("change",finds);



function finds(){
    console.log(students.find(search));

}



function search(name){
    if (findx.value==name.LastName || findx.value==name.FirstName) return name 
    
    
}

let filterx = document.querySelector("#filter");
filterx.addEventListener("change",filters);



function filters(){
    console.log(students.filter(searchs));

}



function searchs(name){
    if (filterx.value==name.LastName || filterx.value==name.FirstName) return name 
    
    
}





