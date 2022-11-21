 function Add (){
    let sum =0;
    for(let val of arguments) 
    {
        sum += val
      } 
    return sum;
}

 function Print(){
    return("Your name is" + arguments[0])
}

function Capitalize(){
    let Name ="";
    for(let i of arguments)
    {
      Name += i.toUpperCase();
    }
    return Name;
}
const String = (a,b,c)=>{
     
    return a.toUpperCase() + b.toLowerCase() + c.substring(0,3) 
}
    
   

    



export{Add,Print,Capitalize,String}