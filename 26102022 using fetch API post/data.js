let flowers = [];
function loadData(callback){
fetch('http://127.0.0.1:5501/db/data.json',{method:'GET'}).then(function(response){ return response.json()}).then(function (response){  flowers=response;callback();})}


// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Success")

//     },5000)
// });
// promise.then(function(response)
// {
//     console.log(response)
// },function (err){
//     console.log(err);
// })














// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch("https://jsonplaceholder.typicode.com/posts",
// {method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
//  fetch("https://jsonplaceholder.typicode.com/comments",
//  {method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
//  fetch("https://jsonplaceholder.typicode.com/photos",
//  {method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
//  fetch("https://jsonplaceholder.typicode.com/todos",
//  {method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
//  fetch("https://jsonplaceholder.typicode.com/users",
//  {method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
