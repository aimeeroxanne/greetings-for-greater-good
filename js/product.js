$(document).ready(function(){
  $('.sidenav').sidenav();

  $.getJSON("js/items.json", function(data) {
    console.log(data[0])

  let id = location.search.slice('1').split('=')[1]

  let product = data[id]

    var itemHTML =
      `<div>
        <img src=${product.img} class="col s12 m6 l6">
      </div>
      <div class="product-description col s12 m6 l6">
        <h5>${product.name} — $${product.price}</h5>
        <p>${product.descriptionLong}</p>
        <a href="#" class="waves-effect waves-teal btn-flat pink accent-1" target="_blank">Add to Cart</a><br>
        <div class="col s12 m6 l6">
        h5>${product.name} — $${product.price}</h5>
        <p>${product.descriptionLong}</p>
        <a href="#" class="waves-effect waves-teal btn-flat pink accent-1" target="_blank">Add to Cart</a><br>
        <div class="col s12 m6 l6">
        </div>
      </div>`

    var productPage = document.getElementById('product')

    productPage.innerHTML = itemHTML

  });

});
