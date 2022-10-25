document.querySelector("#create").addEventListener("click", create);
function create() {
  let formCreate = `<form name="create">
    
    
  
    <div class="mb-3 form-check">
    <label>Name</label>
    <input type="text" name="Name" >
    <span hidden id="Name">is Required</span>
      
    </div>
   
    <div class="mb-3 form-check">
    <label>Class</label>
    <input type="text" name="Class" >
    <span hidden id="Class">is Required</span>
      
    </div>
    <div class="mb-3 form-check">
    <label>Info</label>
    <input type="text" name="Info" >
    <span hidden id="Info">is Required</span>
      
    </div>
    <button type="button" id="Submit" class="btn btn-primary">Submit</button>
  </form>`;

  document.querySelector("#content").innerHTML = formCreate;
  document.querySelector("#Submit").addEventListener("click", submit);
  function submit() {
    const form = document.forms["create"];

    const Name = form.Name.value;
    const Class = form.Class.value;
    const Info = form.Info.value;
    let obj = {
      ID: students.length + 1,
      Name: Name,
      Class: Class,
      Info: Info,
    };

    //Validations
    

    students.push(obj);
    display();
  }
}

//Search functionality added w.r.t eye color and gender.
let data = document.querySelector("#search");
data.addEventListener("change", search);

function search() {
  let info = data.value;

  x = [];

  if (!isNaN(info)) {
    students.forEach(function (student) {
      if (student.Gender == info) {
        x.push(student);
        return student;
      }
    });
  } else if (isNaN(info)) {
    students.forEach(function (student) {
      if (student.Eyes == info) {
        x.push(student);
        return student;
      }
    });
  }

  if (x.length == 0)
    document.querySelector(
      "#content"
    ).innerHTML = `<span>Sorry , record not found</span>`;

  function pushStudents() {
    x.forEach(pushStudent);
  }
  function pushStudent(student) {
    let template = `<tr><td>${student.ID}</td><td>${student.Name}</td><td>${student.Gender}</td><td>${student.Eyes}</td></tr>`;

    document.querySelector("#table_body").innerHTML += template;
  }
  document.querySelector(
    "#content"
  ).innerHTML = `<table border="1px" id="main_table">
    <thead><th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Eyes</th>
    </thead>
    <tbody id="table_body"></tbody>
    </table>`;

  pushStudents();
}
