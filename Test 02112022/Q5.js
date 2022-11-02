//Pattern 1
let str1 =""
console.log("Pattern 1 is : ")
for(let  i =0;i<5;i++)
{
    let str1="";
    for(let j=0;j<=i;j++)
    {
        
        str1 = str1+"*";

    }
    console.log(str1);

}
console.log("Pattern 2 is :")

//Pattern 2
let str2="";
for(let i =0;i<5;i++)
{
    let str2="";
    for(let j =5;j>i;j--){
        str2=str2+"*";
    }
    console.log(str2);
}