let cars = [
    {SNo:1,Name:"Ferrari",Price:1000000},
    {SNo:2,Name:"Buggati",Price:1000010},
    {SNo:3,Name:"Mercedes",Price:99000}
];
function pushCars(){
    cars.forEach(pushCar);

}
function pushCar(car){
   template =  `<tr><td>${car.SNo}</td><td>${car.Name}</td><td>${car.Price}</td></tr>`
   document.querySelector("#tablebody1").innerHTML +=template;
}
pushCars();

let bikes = [
    {SNo:1,Name:"Ducati",Price:75000},
    {SNo:2,Name:"Benelli",Price:40000},
    {SNo:3,Name:"Harley",Price:9000}
];
function pushBikes(){
    bikes.forEach(pushBike);

}
function pushBike(bike){
   template =  `<tr><td>${bike.SNo}</td><td>${bike.Name}</td><td>${bike.Price}</td></tr>`
   document.querySelector("#tablebody2").innerHTML +=template;
}
pushBikes();


let pens = [
    {SNo:1,Name:"Reynolds",Price:75},
    {SNo:2,Name:"Trimax",Price:40},
    {SNo:3,Name:"Pilot",Price:90}
];
function pushPens(){
    pens.forEach(pushPen);

}
function pushPen(pen){
   template =  `<tr><td>${pen.SNo}</td><td>${pen.Name}</td><td>${pen.Price}</td></tr>`
   document.querySelector("#tablebody3").innerHTML +=template;
}
pushPens();

let shoes = [
    {SNo:1,Name:"Nike",Price:750},
    {SNo:2,Name:"Skechers",Price:4000},
    {SNo:3,Name:"Adidas",Price:9000}
];
function pushShoes(){
    shoes.forEach(pushShoe);

}
function pushShoe(shoe){
   template =  `<tr><td>${shoe.SNo}</td><td>${shoe.Name}</td><td>${shoe.Price}</td></tr>`
   document.querySelector("#tablebody4").innerHTML +=template;
}
pushShoes();


let vegetables = [{SNo:1,Name:"Tomato",Price:150},{SNo:2,Name:"Potato",Price:75},{SNo:3,Name:"Brinjal",Price:70}];

function pushVegetables(){
    vegetables.forEach(pushVegetable);
}
function pushVegetable(vegetable){
    template= `<tr><td>${vegetable.SNo}</td><td>${vegetable.Name}</td><td>${vegetable.Price}</td></tr>`;
    document.querySelector("#tablebody5").innerHTML += template;
}
pushVegetables();

let fruits = [{SNo:1,Name:"Mango",Price:150,Quantity:2},{SNo:2,Name:"Apple",Price:250,Quantity:5},{SNo:3,Name:"Banana",Price:15,Quantity:1},{SNo:4,Name:"Jackfruit",Price:1500,Quantity:2}];

function pushFruits(){
    fruits.forEach(pushFruit)


}
function pushFruit(fruit){
    template = `<tr><td>${fruit.SNo}</td><td>${fruit.Name}</td><td>${fruit.Price}</td><td>${fruit.Quantity}</td>`
    document.querySelector("#tablebody6").innerHTML+=template;
}
pushFruits();



let flowers = [{SNo:1,Name:"Rose",Price:10,Quantity:4},{SNo:2,Name:"Sunflower",Price:5,Quantity:1},{SNo:3,Name:"Lotus",Price:100,Quantity:10},{SNo:4,Name:"Jasmine",Price:15,Quantity:4}];

function pushFlowers(){
    flowers.forEach(pushFlower);
}
function pushFlower(flower){
    template = `<tr><td>${flower.SNo}</td><td>${flower.Name}</td><td>${flower.Price}</td><td>${flower.Quantity}</td>`
    document.querySelector("#tablebody7").innerHTML+=template;
}
pushFlowers();



