arr=[8,2,4,7,0,5,7,5,3,6];
//Ascending sort;
// console.log(arr.sort((a,b)=>a-b));
 arr.sort(function (a,b){
    return a-b;

    
})
console.log(arr);



// Descending sort;
console.log(arr.sort((a,b)=>b-a));
// Sum of an array;
let sum = arr.reduce(function (total=0,value){
    return total+value;
})
console.log(sum);


//Set Interval 


let count=10;
const int = setInterval(counter,200);
function counter(){
    
    console.log(count);
    count--;
    
    if(count<0){
        clearInterval(int);
    }
    
    
}


// Example 1;

setTimeout(display,2200)


let price =[{Name:"Apple",Cost:1000},{Name:"Tomato",Cost:100},{Name:"Broom",Cost:300}];


function display(){
let cost = price.map(item=>item.Cost).reduce((total=0,value)=>total+value)
console.log(cost);
let tot =0;
price.forEach(item=>tot+=item.Cost)
console.log(tot);
}















































 

 


