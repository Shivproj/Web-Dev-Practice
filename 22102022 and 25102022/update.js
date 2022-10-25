function updateFlower() {
  isEdit = true;
  if (selectedIds.length === 0 || selectedIds.length > 1) {
    alert("Please selecte one flower");
  } else {    
    createFlower();
    flower = flowers.find(function (item) {
      return item.ID == parseFloat(selectedIds[0]);
    });
    const form = document.forms["create"];
    form.sepalLength.value = flower.sepalLength;
    form.sepalWidth.value = flower.sepalWidth;
    form.petalLength.value = flower.petalLength;
    form.petalWidth.value = flower.petalWidth;
    form.species.value = flower.species;
  
  
  }
}
