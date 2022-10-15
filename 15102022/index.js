const x = document.querySelector("#input");
x.addEventListener("input",input );



function input(){
   let n =  x.value;
   document.querySelector("#result").value = check(n);


}

function check(n){
    isPrime = true;
    if(n<=1) return "Not Possible";    
    else{
    for(let i =2;i<=n/2;i++){
        if(n%i==0) {                
        isPrime = false;
        break;}
    
}
if(isPrime==true) return "Prime";
else return "Composite";
}

}


