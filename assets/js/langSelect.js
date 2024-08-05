

var langSelector = document.getElementById("langSelect");

var en = document.getElementsByClassName("enComponent");
var ja = document.getElementsByClassName("jaComponent");

langSelector.addEventListener("change", (event) => {
  console.log(langSelector.value);
  if(langSelector.value === "English"){
    for (var index = 0; index < ja.length; index++) {
      ja[index].style.display = 'none';
    }
    for (var index = 0; index < en.length; index++) {
      en[index].style.display = 'block';
    }
  }
  else if(langSelector.value === "Japanese"){
    for (var index = 0; index < en.length; index++) {
      en[index].style.display = 'none';
    }
    for (var index = 0; index < ja.length; index++) {
      ja[index].style.display = 'block';
    }
  }
});
