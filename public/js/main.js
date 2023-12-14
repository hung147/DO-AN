function decreaseValue() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value, 10);

  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
}

function increaseValue() {
  let quantityInput = document.getElementById("quantity");
  let currentValue = parseInt(quantityInput.value, 10);

  quantityInput.value = currentValue + 1;
}
// document.querySelector(".overlay-left").addEventListener("click", function () {
//   document.querySelector(".overlay-container").classList.toggle("show");
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const overlayLeft = document.getElementById("overlay-left");
//   const toggleOverlay = document.getElementById("toggle-overlay");

//   toggleOverlay.addEventListener("click", function () {
//     overlayLeft.classList.toggle("active");
//   });

//   // Tự động tắt lớp khi bấm ra ngoài
//   window.addEventListener("click", function (event) {
//     if (
//       !overlayLeft.contains(event.target) &&
//       !toggleOverlay.contains(event.target)
//     ) {
//       overlayLeft.classList.remove("active");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var overlay = document.getElementById("overlay");

//   // Hiển thị overlay
//   function showOverlay() {
//     overlay.style.display = "block";
//   }

//   // Ẩn overlay
//   function hideOverlay() {
//     overlay.style.display = "none";
//   }

//   // Lắng nghe sự kiện click trên body
//   document.body.addEventListener("click", function (event) {
//     // Kiểm tra xem sự kiện click có xảy ra bên ngoài overlay không
//     if (!overlay.contains(event.target)) {
//       hideOverlay();
//     }
//   });

//   // Hiển thị overlay khi cần
//   showOverlay();
// });
