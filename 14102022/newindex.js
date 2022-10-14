btn1 = document.querySelector("#submit");
btn1.addEventListener("click",submit);
btn2 = document.querySelector("#display");
btn2.addEventListener("click",display);
btn3 = document.querySelector("#find");
btn3.addEventListener("click",find);
btn4 = document.querySelector("#filter");
btn4.addEventListener("click",filter);
btn5 = document.querySelector("#forEach");
btn5.addEventListener("click",forEach);

let btn6 = document.querySelector("#map");
btn6.addEventListener("click",map);


let cars=[];

function submit(){
    let obj={};
    obj.Brand = document.querySelector("#brand").value;
    obj.Model = document.querySelector("#model").value;
    obj.Fuel = document.querySelector("#fuel").value;
    obj.Speed = document.querySelector("#speed").value;
    obj.Dates = document.querySelector("#date").value;
    cars.push(obj)
   

}
function display(){
    console.log(cars);
}
function find(){
    let x = cars.find(function(item){
        return   item.Dates <'2022-10-01'
    })
    console.log(x);

}
function filter(){
    let x =cars.filter(function(item){
        return item.Speed>300;
    })
    console.log(x);

}
function forEach(){
    cars.forEach(function(item){
        if(item.Fuel=="Diesel") console.log(item);

    })

}
function map(){
    let data = cars.map(function(item){
        return item;
        
        
    })
   

    let data1 = data.filter(function(item){
        return item.Model=="A4";
    })
    console.log(data1);
    
}
