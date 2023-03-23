var slider = document.getElementById("slider");
var value = document.getElementById("output");
value.innerHTML = slider.value;

slider.oninput = function() {
  value.innerHTML = this.value;
}
