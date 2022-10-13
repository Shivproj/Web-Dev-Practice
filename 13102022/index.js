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
arr.splice(3,0,"Shiv")
console.log(arr)