$(document).ready(function(){
  $('.sidenav').sidenav();

  $.getJSON("js/items.json", function(data) {
    console.log(data[0])

  let id = location.search.slice('1').split('=')[1]

  let product = data[id]

    var itemHTML =
      `<div>
        <img src=${product.img} class="col s12 m12 l6">
       </div>
       <div class="product-description col s12 m12 l6">
        <div>
          <h5>${product.name} — $${product.price}</h5>
          <p>${product.descriptionLong}</p>
          <a href="#" class="waves-effect waves-white btn-flat pink accent-1">Add to Cart</a>
        </div>
        <br>
        <div class="divider"></div>
        <div class="row section">
          <img src="${product.charityImg}" class="col m4 l4">
          <div class="col m8 l8">
            <h5>${product.charity}</h5>
            <p>${product.charityDescription}</p>
          </div>
        </div>
        </div>`

    var productPage = document.getElementById('product')

    productPage.innerHTML = itemHTML

  });

});
