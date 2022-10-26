function deleteFunction() {
  if (selectedIds.length === 0 || selectedIds.length > 1) {
    alert("Please selecte one flower");
  } else {
    const result = confirm("Are you sure ? do you really want to delete ?");
    if (result) {
      const idx = flowers.findIndex(function (item) {
        return item.ID == selectedIds[0];
      });
      flowers.splice(idx, 1);
      selectedIds = [];
      readFlowers();
    }
  }
}
