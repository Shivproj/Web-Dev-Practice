let Arr = [
  { Id: 1, Name: "Shiv", Age: 20, Marks: 99 },
  {
    Id: 2,
    Name: "Sai",
    Age: 21,
    Marks: 45,
  },
  {
    Id: 3,
    Name: "Indrakanti",
    Age: 18,
    Marks: 72,
  },
];
//Part1
Arr.forEach(function(item){
    if(item.Age<20){
        console.log("You are not eligible");

    }
    else{
        console.log("Success message")
    }
})
//Part2
let x = Arr.find(function(item){
    return item.Marks>=70;
})
console.log(x);