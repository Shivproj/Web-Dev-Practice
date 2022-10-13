//String practice at 10:43 AM


//Note diff b/w substr() and substring() is that substring() takes start and end, substr() takes starting index and no of character to be deleted from
const str = "Shiv Sai Indrakanti"
console.log(str.substring(5,2));// Substring swaps start and end index if end index<start index
console.log(str.length)
console.log(str.charAt(2))
console.log(str.toLowerCase().indexOf('s'))
const str2 = str.toLowerCase().replace('s','f')
console.log(str2);
console.log(str.slice(2,4))
//slice will take end index as inclusive.


//Array Splice practice  at 10:50 AM

const arr =[1,2,3,4];
arr.splice(3,0,"Shiv")//starting index, no of elements to be deleted, new element
console.log(arr)
arr.splice(3,2)// to delete 3rd element array.splice(2,1) splice can be used to delete as well
console.log(arr)
 join = arr.join(" and ") //Array join method with "and"
console.log(join)


//Object creation 11:15 AM

let obj={};
 obj.Name = "Shiv";
console.log(obj.Name);//Access with property name 
console.log(obj.age=3)// can be updated 
console.log(obj)

//Find method accepts function as a parameter - predicate 12:40 PM

const item = a.find(function(item){

    return 2==item.id;

})