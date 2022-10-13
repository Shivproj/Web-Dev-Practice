let btn1 = document.querySelector("#submit");
btn1.addEventListener("click",getData);

let btn2 = document.querySelector("#sfn");
btn2.addEventListener("click",showFirstName);
let a=[];

 //Trying to print array of objects

function getData(){ 
    let obj={};    
    obj.FirstName=document.querySelector("#fname").value;
    obj.LastName=document.querySelector("#lname").value;
    a.push(obj);
    ( function (){
        console.log(a);
       })();
  
    
    }



function showFirstName(){
    for(let i=0;i<a.length;i++){
        console.log(a[i].FirstName);
    }

}


  




    
   








