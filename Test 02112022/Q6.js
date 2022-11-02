//setTimeout
function sayHi(){
console.log("Hi");
} 
setTimeout(sayHi,1000);
//setInterval;

let interval = setInterval(count,1000);
let i =1;
 

function count(){
    
    console.log(i);
    i++;
    if(i===11){
        clearInterval(interval);       
    
    }
   
   
}





