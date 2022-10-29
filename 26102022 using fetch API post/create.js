function createFlower() {
  let formCreate = `<form name="create">
    
    
  
    <div class="mb-3 form-check">
    <label>sepalLength</label>
    <input type="text" name="sepalLength" >
    <span hidden id="sepalLength">is Required</span>      
    </div>
    <div class="mb-3 form-check">
    <label>sepalWidth</label>
    <input type="text" name="sepalWidth" >
    <span hidden id="sepalWidth">is Required</span>      
    </div>
    <div class="mb-3 form-check">
    <label>petalLength</label>
    <input type="text" name="petalLength" >
    <span hidden id="petalLength">is Required</span>      
    </div>
    <div class="mb-3 form-check">
    <label>petalLength</label>
    <input type="text" name="petalWidth" >
    <span hidden id="petalWidth">is Required</span>      
    </div>
    <div class="mb-3 form-check">
    <label>petalLength</label>
    <input type="text" name="species" >
    <span hidden id="species">is Required</span>      
    </div>
    
   
   
    <button type="button" id="Submit" class="btn btn-primary">Submit</button>
  </form>`;

  document.querySelector("#content").innerHTML = formCreate;
  document.querySelector("#Submit").addEventListener("click", submit);
}

function submit() {
  function valiadteSepalLength(len) {
    isValid: true;
    message = "";
    if (!len.value) {
      isValid: false;
      message: "is Required";
    }
  }
  function valiadteSepalWidth(len) {
    isValid: true;
    message = "";
    if (!len.value) {
      isValid: false;
      message: "is Required";
    }
  }
  function valiadtePetalLength(len) {
    isValid: true;
    message = "";
    if (!len.value) {
      isValid: false;
      message: "is Required";
    }
  }
  function validatePetalWidth(len) {
    isValid: true;
    message = "";
    if (!len.value) {
      isValid: false;
      message: "is Required";
    }
  }
  function validateSpecies(len) {
    isValid: true;
    message = "";
    if (!len.value) {
      isValid: false;
      message: "is Required";
    }
  }



  const form = document.forms["create"];
  const sepalLength = form.sepalLength.value;
  const sepalWidth = form.sepalWidth.value;
  const petalLength = form.petalLength.value;
  const petalWidth = form.petalWidth.value;
  const species = form.species.value;
  let id;
  if (isEdit) {
    id = flowers.findIndex(function (item) {
      return item.ID == selectedIds[0];
    });
  } else {
    id = flowers.length + 1;
  }

  console.log(id);

  let obj = {
    ID: id,
    sepalLength: sepalLength,
    sepalWidth: sepalWidth,
    petalLength: petalLength,
    petalWidth: petalWidth,
    species: species,
  };

  if (!isEdit) {
    flowers.push(obj);
    readFlowers();
  } else {
    flowers[id] = obj;

    readFlowers();
  }

  //Validations

  }
