$.getJSON("js/items.json", function(data){
  console.log(data)

  for(let i = 0; i < data.length; i++){
    var itemHTML =
      `<div class="holder"><div class="item row section">
        <div class="col s2 m2 l2">
          <i class="close material-icons">close</i>
        </div>
        <img class="col s3 m3 l3" src="${data[i].img}">
        <div class="col s3 m4 l4">
          <h5>${data[i].name}</h5>
          <p>${data[i].descriptionShort}</p>
        </div>
        <div class="col s2 m2 l2 right">
          <h5 class"price align-right">$${data[i].price}</h5>
        </div>
      </div>
      <div class="divider"></div>
      </div>`

    var cartItems = document.getElementById('cart-items')
    var item = document.createElement('div')
    item.innerHTML = itemHTML
    cartItems.appendChild(item)

    // for(let i = 0; i < prices.length; i++){
    //   console.log(prices[i])
    //   total += prices[i]
    // }

  }

  var prices = document.getElementsByClassName('price')
  let total = 0

  console.log(prices)

  var close = document.getElementsByClassName('close')

  console.log(close)

  for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      close[i].parentNode.parentNode.parentNode.remove()
    })
  }

// $.getScript("js/shop.js", function() {
// });
})
