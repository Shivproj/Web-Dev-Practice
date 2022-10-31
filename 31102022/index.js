// try{
//     let a=b;
// }

// catch(error){
//    if(error instanceof ReferenceError){
//     console.log("Not defined");
//    }
// }


// for(i =0;i<10;i++)
// {   var x =5;

//     console.log(i);
// }

// console.log(i+5);
// console.log(x);



let obj={a:10,b:20};
// _obj={a:100,b:200};

 let _obj = obj
 _obj.a = 100;

console.log(obj.a);