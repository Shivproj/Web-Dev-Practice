// let dt = new Date();
// console.log(dt);
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getDate());
// console.log(dt.getDay());
// console.log(dt.getHours());
// console.log(dt.getMinutes());
// console.log(dt.getSeconds());
// console.log(dt.getMilliseconds());
// console.log(dt.getTime());
// dt.setHours(7);
// console.log(dt.getHours());

// console.log(Math.PI);

// Array = [8, 6, 7, 9, 8];
// console.log(Math.max(9,1));
// console.log(Math.round(9.48));
// console.log(Math.sqrt(9));
// console.log(Math.ceil(2.4));
// console.log(Math.floor(2.4));
// console.log(Math.abs(-232))

// Array.unshift(3, 4);
// console.log(Array);

//Making a circle in js

// const inp = document.querySelector("#input");
// inp.addEventListener("input", circle);





function circle() {
  console.log(getRadius());
  document.querySelector("#circle").style.height = getRadius() + "px";
  document.querySelector("#circle").style.width = getRadius() + "px";
}



let x;
function getRadius(){
fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1&max=500&count=1",{ method:"GET"}).then(function(response) {return response.json()}
).then(function(res) {

return x = res[0]});
return x/5;
}
setInterval(circle,1000);