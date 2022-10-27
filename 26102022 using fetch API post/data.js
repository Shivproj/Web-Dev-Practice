let flowers = [];

fetch("http://127.0.0.1:5501/db/data.json", { method: "GET" })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    flowers = response;
  });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    ID: "151",
    sepalLength: 1,
    sepalWidth: 1,
    petalLength: 1,
    petalWidth: 1,
    species: "s",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => flowers.push(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => (flowers[0] = json));

fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "PATCH",
  body: JSON.stringify({
    species: "b",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => (flowers[0] = json));

fetch("https://jsonplaceholder.typicode.com/posts/3", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((json) => (flowers[2] = json));

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
