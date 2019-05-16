// Design Modal
var design_modal = document.getElementById('design-modal');
var design_modal_btn = document.getElementById("design-modal-btn");

var span = document.getElementsByClassName("design-close")[0];

design_modal_btn.onclick = function() {
  design_modal.style.display = "block";
}

span.onclick = function() {
  design_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == design_modal) {
    design_modal.style.display = "none";
  }
}

// Coding Modal
var coding_modal = document.getElementById('coding-modal');
var coding_modal_btn = document.getElementById("coding-modal-btn");

var span = document.getElementsByClassName("coding-close")[0];

coding_modal_btn.onclick = function() {
  coding_modal.style.display = "block";
}

span.onclick = function() {
  coding_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == coding_modal) {
    coding_modal.style.display = "none";
  }
}

// Hosting Modal
var hosting_modal = document.getElementById('hosting-modal');
var hosting_modal_btn = document.getElementById("hosting-modal-btn");

var span = document.getElementsByClassName("hosting-close")[0];

hosting_modal_btn.onclick = function() {
  hosting_modal.style.display = "block";
}

span.onclick = function() {
  hosting_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == hosting_modal) {
    hosting_modal.style.display = "none";
  }
}