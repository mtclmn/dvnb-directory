function filterNames() {
  var input, filter, list, person, name, results, i;
  results = 0;
  input = document.querySelector(".search");
  filter = input.value.toUpperCase();
  brands = document.querySelectorAll("[data-brand]");
  for (i = 0; i < brands.length; i++) {
    name = brands[i].querySelector("[data-brand-name]");
    if (name) {
      if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
        brands[i].style.display = "";
      } else {
        brands[i].style.display = "none";
        results ++;
      }
    }
  }
}