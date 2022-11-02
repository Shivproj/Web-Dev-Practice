document.querySelector("#button").addEventListener('click', submit)
let arr=[]
function submit() {
    console.log("Hello");
let obj={}
const form = document.forms['form']
obj.FName=form.fname.value;
obj.LName= form.lname.value;
obj.Email= form.email.value;
obj.PhNo= form.phone.value;
obj.select=form.select.value ;
arr.push(obj);
console.log(arr);

}

//Completely working code

