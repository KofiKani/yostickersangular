/*// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("product-img");
var modalImg = document.getElementById("img-enlarge");

function openModal() {
  modal.style.display = "block";
  modalImg.src = img.src;
  document.getElementsByClassName("&times")[0].style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("&times")[0];

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  document.getElementsByClassName("&times")[0].style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  */


  // Get the modal and image elements
var modal = document.getElementById("modal");
var img = document.getElementById("product-img");
var modalImg = document.getElementById("img-enlarge");

// Open the modal
function openModal() {
  modal.style.display = "block";
  modalImg.src = img.src;
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
  document.getElementsByClassName("&times")[0].style.display = "none";
}

// Close the modal when the user clicks outside of the modal image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



