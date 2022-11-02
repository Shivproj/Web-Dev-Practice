document.querySelector('#myLink').addEventListener('click',myFunction )
function myFunction() {
    const form = document.forms["myform"];
    let name = form.text.value;
    console.log(name);

        
    
};