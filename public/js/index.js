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
//
