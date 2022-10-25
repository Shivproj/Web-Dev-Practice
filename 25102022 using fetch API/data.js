let flowers=[];
 fetch("http://127.0.0.1:5501/db/data.json", 
{method:"GET"}).then(function(response) {return response.json()}).then(function (res){ return flowers=res})