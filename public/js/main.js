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
