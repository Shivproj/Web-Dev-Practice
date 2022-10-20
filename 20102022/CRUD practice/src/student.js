document.querySelector("#create").addEventListener("click", create);
function create() {
    function validName(name) {
      isValid = true;
      message = "";
      if (!name) {
        isValid = false;
        message = "isRequired";
      }
      else if (!isNaN(name)) {
        isValid = false;
        message = "Name cant include numbers";
      }
      return { isValid, message };
    }
    function validEyes(eyes) {
      isValid = true;
      message = "";
      if (!eyes) {
        isValid = false;
        message = "isRequired";
      }
  
      return { isValid, message };
    }
    let formCreate = `<form name="create">
    
    
  
    <div class="mb-3 form-check">
    <label>Name</label>
    <input type="text" name="Name" >
    <span hidden id="Name">is Required</span>
      
    </div>
    <div class="mb-3 form-check">
    <label>Gender</label>
    <input type="checkbox" name="Gender" >
    <span hidden id="Gender">is Required</span>
      
    </div>
    <div class="mb-3 form-check">
    <label>Eyes</label>
    <input type="text" name="Eyes" >
    <span hidden id="Eyes">is Required</span>
      
    </div>
    <button type="button" id="Submit" class="btn btn-primary">Submit</button>
  </form>`;
  
    document.querySelector("#content").innerHTML = formCreate;
    document.querySelector("#Submit").addEventListener("click", submit);
    function submit() {
      const form = document.forms["create"];
  
      const Name = form.Name.value;
  
      if (!form.Gender.checked) Gender = 0;
      else Gender = 1;
  
      const Eyes = form.Eyes.value;
      let obj = {
        ID: students.length + 1,
        Name: Name,
        Gender: Gender,
        Eyes: Eyes,
      };
  
      //Validations
      let checkName = validName(Name);
      let checkEyes = validEyes(Eyes);
      if (!checkName.isValid) {
        document.querySelector("#Name").hidden = false;
        document.querySelector("#Name").innerText = checkName.message;
  
        return;
      } else {
        document.querySelector("#Name").hidden = true;
      }
      if (!checkEyes.isValid) {
        document.querySelector("#Eyes").hidden = false;
        document.querySelector("#Eyes").innerText = checkEyes.message;
  
        return;
      } else {
        document.querySelector("#Eyes").hidden = true;
      }
  
      students.push(obj);
      display();
    }
  }
  