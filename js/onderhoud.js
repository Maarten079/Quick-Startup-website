// Home Modal
var home_modal = document.getElementById('home-modal');
var home_modal_btn = document.getElementById("home-modal-btn");

var span = document.getElementsByClassName("home-close")[0];

home_modal_btn.onclick = function() {
  home_modal.style.display = "block";
}

span.onclick = function() {
  home_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == home_modal) {
    home_modal.style.display = "none";
  }
}

// Wat Modal
var wat_modal = document.getElementById('wat-modal');
var wat_modal_btn = document.getElementById("wat-modal-btn");

var span = document.getElementsByClassName("wat-close")[0];

wat_modal_btn.onclick = function() {
  wat_modal.style.display = "block";
}

span.onclick = function() {
  wat_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == wat_modal) {
    wat_modal.style.display = "none";
  }
}

// Wie Modal
var wie_modal = document.getElementById('wie-modal');
var wie_modal_btn = document.getElementById("wie-modal-btn");

var span = document.getElementsByClassName("wie-close")[0];

wie_modal_btn.onclick = function() {
  wie_modal.style.display = "block";
}

span.onclick = function() {
  wie_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == wie_modal) {
    wie_modal.style.display = "none";
  }
}