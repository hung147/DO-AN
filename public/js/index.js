// import { getProducts } from "./services/product.services.js";
// getProducts().then(function (products) {
//   $.each(products, function (index, product) {
//     $(`
//           <div class="product">
//             <div class="product-thumbnail">
//               <img src="${product.thumbnail}"
//               alt="${product.title}" />
//             </div>
//             <div class="product-infor">
//               <h3 class="product-title">${product.title}</h3>
//             </div>
//           </div>
//         `).appendTo(".products");
//   });
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
document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");

  // Hiển thị lớp ảo khi người dùng nhấp vào FLOWERS
  document.querySelector(".nav").addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "block";
  });

  // Ẩn lớp ảo khi người dùng nhấp vào nó
  overlay.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
