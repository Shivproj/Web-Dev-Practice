let flowers = [];
fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET'}).then(function(response){ return response.json()}).then(function (response){ return flowers=response})
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
