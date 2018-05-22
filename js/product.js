$(document).ready(function() {
  $('.sidenav').sidenav();

  $.getJSON("js/items.json", function(data) {

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
          <a href="#" class="waves-effect waves-white btn-flat pink accent-1 product-button">Add to Cart</a>
        </div>
        <br>
        <div class="divider"></div>
        <div class="row section">
          <img src="${product.charityImg}" class="col s12 m4 l4">
          <div class="col s12 m8 l8">
            <h5>${product.charity}</h5>
            <p>${product.charityDescription}</p>
          </div>
        </div>
        </div>`

    var productPage = document.getElementById('product')
    productPage.innerHTML = itemHTML

    let currentStorage = JSON.parse(localStorage.getItem("item"))
    console.log(currentStorage.length)

    let badge = document.getElementById('badge')
    console.log(badge)
    badge.innerHTML = `items in cart ${currentStorage.length}`

    var toCartButton = document.getElementsByClassName('product-button')[0]

    toCartButton.addEventListener('click', function(event) {
      event.preventDefault()

      if (currentStorage === null) {
        currentStorage = []
        currentStorage.push(product.id)
      } else if (currentStorage !== null) {
        currentStorage.push(product.id)
      }

      localStorage.setItem("item", JSON.stringify(currentStorage))

      badge.innerHTML = `items in cart ${currentStorage.length}`

    })

  });

});
