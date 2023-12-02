import { getProducts } from "./services/product.services.js";
getProducts().then(function (products) {
  $.each(products, function (index, product) {
    $(`
          <div class="product">
            <div class="product-thumbnail">
              <img src="${product.thumbnail}" 
              alt="${product.title}" />
            </div>
            <div class="product-infor">
              <h3 class="product-title">${product.title}</h3>
            </div>
          </div>
        `).appendTo(".products");
  });
});
