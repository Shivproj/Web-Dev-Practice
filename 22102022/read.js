document.querySelector("#read").addEventListener("click", readFlowers);
let selectedIds = [];
function readFlowers() {
  template = ` <button type="button" id = "delete"class="btn btn-danger">Delete</button>
  <table>
    <thead><tr><th>Select</th><th>Sepal Length</th><th>Sepal Width</th><th>Petal Length </th><th>Petal Width</th><th>Species</th></tr><thead>
    <tbody>       

    </tbody>
</table>`;
  document.querySelector("#content").innerHTML = template;
  flowers.forEach(readFlower);
  let checkBoxList = document
    .querySelector("tbody")
    .querySelectorAll(".checkbox");
    console.log(checkBoxList);
  
  checkBoxList.forEach(function (checkBox) {
    checkBox.addEventListener("change", onSelection);
  });
  document.querySelector("#delete").addEventListener("click", deleteFunction);
}

function readFlower(flower) {
  template = `<tr>
        <td><input type="checkbox" class="checkbox" id="${flower.ID}" ></td>
        <td>${flower.ID}</td>
        <td>${flower.sepalLength}</td>
        <td>${flower.sepalWidth}</td>
        <td>${flower.petalLength}</td>
        <td>${flower.petalWidth}</td>
        <td>${flower.species}</td>
    </tr>`;

  document.querySelector("tbody").innerHTML += template;
}
function onSelection(event) {
    const selectedItem = event.target;
  if (selectedItem.checked) {
    selectedIds.push(selectedItem.id);
  } 
 
  else {
    const idx = selectedIds.indexOf(selectedItem.id);
    selectedIds.splice(idx, 1);
  }
  

}
function deleteFunction(){
    debugger
    if (selectedIds.length === 0 || selectedIds.length > 1) {
        alert("Please selecte one flower");
      }  else {
        const result = confirm("Are you sure ? do you really want to delete ?");
        if (result) {
          const idx = flowers.findIndex(function (item) {    
            console.log(typeof selectedIds[0])       
            return item.ID == selectedIds[0];
          });
          flowers.splice(idx, 1);
          selectedIds = [];
          readFlowers();
        }
      }
}

// readFlowers();

// document.querySelector("#create").addEventListener("click", createFlower);
