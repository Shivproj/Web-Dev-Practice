 const items = [];
 document.querySelector("#submit").addEventListener("click", submit);
 document.querySelector("#display").addEventListener("click", display);
 document.querySelector("#calc").addEventListener("click", calc);

function submit(){
    let obj = {};
    obj.Name = document.querySelector("#name").value;
    obj.Cost = document.querySelector("#cost").value;

    items.push(obj);
}

function display(){
    console.log(items);

}

function calc(){
    let items2 = items.filter((item)=>item.Cost<=500).map((item)=>parseFloat(item.Cost)).reduce((tot=0,value)=>tot+=value);
    document.querySelector("#result").value = items2;
    let total=0;
    items.forEach(function(item){
        if(item.Cost<=500){
            total = total+parseFloat(item.Cost);

        }


    })
    console.log(total);



}