const roomImg = document.getElementById("roomImg");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

roomImg.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  document.body.style.overflow = "hidden";
}

closeBtn.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

modal.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}
