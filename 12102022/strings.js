const string = document.querySelector("#string")
str ="Shiv Sai Indrakanti  ";
length = str.length;
upper = str.toUpperCase()
lower = str.toLowerCase()
trim = str.trim();
index = str.indexOf("Sai")
indextrim = trim.indexOf("Sai")
substring = str.substring(2,7);
lastindex = str.lastIndexOf("Sai")
strlist = str.split(" ");
concat = upper.concat(lower);




string.innerText = length + " " + upper + " " + lower +" " + trim.length +" " + index + " " + indextrim + " " + substring + " "  + lastindex +" " + strlist+" "+concat;

