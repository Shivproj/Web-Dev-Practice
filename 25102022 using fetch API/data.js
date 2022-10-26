let flowers=[];
fetch("http://127.0.0.1:5501/db/data.json", 
{method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})
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
 


