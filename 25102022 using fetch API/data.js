let flowers = [];
function loadData(callback) {
  fetch("http://127.0.0.1:5501/db/data.json", { method: "GET" })
    .then(function (x) {    
      
      return x.json();

    })
    .then(function (res) {
      flowers = res;
      callback();
    });}

   
    // fetch("https://jsonplaceholder.typicode.com/posts", {
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
//   .then((json) => flowers.push(json[0]));




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
