let selectedIds = [];
function readFlowers() {
  selectedIds = [];

  isEdit = false;
  template = ` <button type="button" id = "delete"class="btn btn-danger">Delete</button>
  <button type="button" id = "update" class="btn btn-danger">Update</button>
  <table border="2px" cellspacing="10" cellpadding="10">
    <thead><tr><th>Select</th><th>Sepal Length</th><th>Sepal Width</th><th>Petal Length </th><th>Petal Width</th><th>Species</th></tr><thead>
    <tbody>       

    </tbody>
</table>`;
  document.querySelector("#content").innerHTML = template;
  flowers.forEach(readFlower);
  let checkBoxList = document
    .querySelector("tbody")
    .querySelectorAll(".checkbox");

  checkBoxList.forEach(function (checkBox) {
    checkBox.addEventListener("change", onSelection);
  });
  document.querySelector("#delete").addEventListener("click", deleteFunction);
  document.querySelector("#update").addEventListener("click", updateFlower);
}

function readFlower(flower) {
  template = `<tr>
        <td><input type="checkbox" class="checkbox" id="${flower.ID}" ></td>
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
  } else {
    const idx = selectedIds.indexOf(selectedItem.id);
    selectedIds.splice(idx, 1);
  }
}

loadData(readFlowers);
document.querySelector("#create").addEventListener("click", createFlower);
