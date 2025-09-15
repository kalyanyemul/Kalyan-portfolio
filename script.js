function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openPopup(src) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popup.style.display = "flex";
  popupImg.src = src;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openPopup(imgSrc) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = imgSrc;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});
