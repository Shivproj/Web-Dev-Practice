document.querySelector("#students").addEventListener("click", display);

let selectedIds = [];
function display() {
  template = `
    <button type="button" id="edit" class="btn btn-primary my-4">Edit</button>
    <button type="button" id="delete" class="btn btn-danger my-4">Delete</button>    
    <table border="1px"><thead><tr>
    <th>ID</th>
    <th>Name</th>
    <th>Class</th>
    <th>Info</th>
    </tr></thead>
    <tbody> 

    </tbody></table>`;
  document.querySelector("#content").innerHTML = template;
  students.forEach(readStudent);
  function readStudent(student) {
    template = `<tr>
      <td><input type="checkbox" class="checkbox" id="${student.ID}"></td>
      <td>${student.ID}</td>
      <td>${student.Name}</td>
      <td>${student.Class}</td>
      <td>${student.Info}</td>
      </tr>`;
    document.querySelector("tbody").innerHTML += template;
  }

  const checkList = document
    .querySelector("tbody")
    .querySelectorAll(".checkbox");
  checkList.forEach(function (item) {
    item.addEventListener("change", onSelection);
  });
  document.querySelector("#edit").addEventListener("click", editStudent);

  document.querySelector("#delete").addEventListener("click", deleteStudent);
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

function editStudent() {}

function deleteStudent() {
  if (selectedIds.length === 0 || selectedIds.length > 1) {
    alert("Please selecte one student");
  } else {
    const result = confirm("Are you sure ? do you really want to delete ?");
    if (result) {
      const idx = students.findIndex(function (item) {
        return item.ID === selectedIds[0];
      });
      students.splice(idx, 1);
      selectedIds = [];
      display();
    }
  }
}
display();
