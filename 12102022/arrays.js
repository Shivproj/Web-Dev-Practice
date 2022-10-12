// fruits.splice(index,0/*dont delete*/,"Banana")  delete count number of items from that index on ward

const array = document.querySelector("#array") ;
cars = ["Aston Martin","Bentley",[1,2,3],"True"];


length = cars.length
console.log(length);
cars.push("Ferrari") ;
console.log(cars);
cars.pop()
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Audi");
console.log(cars);
console.log(cars.indexOf("Bentley"))
cars.splice(0,1,"Mercedes");
console.log(cars);
console.log(cars[2][2]);//Should give output as 3
cars.splice(2,2,"BMW")
console.log(cars);
console.log(cars.indexOf("BMW"));













 