var results = 0;
var noEl = document.querySelector("[data-no-results]");
var suggestToggle = document.querySelectorAll("[data-suggest-toggle]");

function filterNames() {
  var input, inputVal, filter, list, person, name, i;
  input = document.querySelector(".search");
  submitInput = document.querySelector(".submit-search");
  if (submitInput.value.length > 0) {
    inputVal = submitInput.value
  } else {
    inputVal = input.value
  }
  filter = inputVal.toUpperCase();
  brands = document.querySelectorAll("[data-brand]");
  results = 0;
  for (i = 0; i < brands.length; i++) {
    name = brands[i].querySelector("[data-brand-name]");
    if (name) {
      if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
        brands[i].style.display = "";
        if (filter.length == 0) { results = 0 } else { results ++; }
      } else {
        brands[i].style.display = "none";
      }
    }
  }

  if (results == 0 && filter.length > 0) {
    noEl.style.display = "block";
  } else if (results > 0 && filter.length > 0) {
    noEl.style.display = "none";
  }

  if (results == 0 && filter.length == 0) {
  	document.body.classList.remove('is-filtered');
  } else {
  	document.body.classList.add('is-filtered');
  }

}

function toggleSubmit(e) {
  e.preventDefault();
  var suggestEl = document.querySelector('.suggest');
  suggestEl.classList.toggle('is-visible');
}
suggestToggle.forEach((el) => {
  el.addEventListener("click", toggleSubmit);
});