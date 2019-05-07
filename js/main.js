// Get the container element
var btnContainer = document.getElementById("navbar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});



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
