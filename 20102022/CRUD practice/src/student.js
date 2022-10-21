let data = document.querySelector("#search")
data.addEventListener("change",search);


function search(){
    display();
    let info = data.value;
    
    x=[];
    if(!isNaN(info)){
 

    students.forEach(function(student){
        if(student.Gender==info) {
            x.push(student);
            return student;
        }
    })
}

else if(isNaN(info)){
    students.forEach(function(student){
        if(student.Eyes==info) {
            x.push(student);
            return student;
        }
    })
    
}



    function pushStudents() {
        x.forEach(pushStudent);
      }
      function pushStudent(student) {
        let template = `<tr><td>${student.ID}</td><td>${student.Name}</td><td>${student.Gender}</td><td>${student.Eyes}</td></tr>`;
    
        document.querySelector("#table_body").innerHTML += template;
      }
      document.querySelector("#content").innerHTML = `<table border="1px" id="main_table">
    <thead><th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Eyes</th>
    </thead>
    <tbody id="table_body"></tbody>
    </table>`;
    
      pushStudents();
    }






