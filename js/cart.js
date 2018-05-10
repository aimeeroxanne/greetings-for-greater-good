$.getJSON("js/items.json", function(data){
  console.log(data)

let storage = JSON.parse(localStorage.getItem("item"))
  console.log("local storage"+storage)

  for(let j = 0; j < storage.length; j++){
    // console.log(storage[j])
    for(let i = 0; i < data.length; i++){
      // console.log(data[i])
      if(storage[j] === data[i].id){
        // console.log('add item to cart')

        var itemHTML =
          `<div class="holder"><div class="item row section">
            <div class="col s2 m2 l2">
              <i class="close material-icons">close</i>
            </div>
            <img class="col s2 m2 l2" src="${data[i].img}">
            <div class="col s3 m5 l5">
              <h5>${data[i].name}</h5>
              <p>${data[i].descriptionShort}</p>
            </div>
            <div class="col s2 m2 l2 right">
              <h5 class="price">$${data[i].price}</h5>
            </div>
          </div>
          <div class="divider"></div>
          </div>`

        var cartItems = document.getElementById('cart-items')
        var item = document.createElement('div')
        item.innerHTML = itemHTML
        cartItems.appendChild(item)

      }
    }
  }


//Inside $.getJSON but outside loops

  let prices = document.getElementsByClassName('price')
  let total = []

  for(let k = 0; k < prices.length; k++){
      let result = prices[k].innerHTML.split('')
      // console.log(result[1])
      total.push(result[1])
  }

  function add(arr){
    return arr.map(Number).reduce((a,b)=>a+b)
  }

  let parsedTotal = add(total)
  console.log(total)
  console.log(parsedTotal)

  let printedTotal = document.getElementById('cart-total')

  printedTotal.innerHTML = `Total $${parsedTotal}`

  var close = document.getElementsByClassName('close')

  // console.log(close)

  for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
      close[i].parentNode.parentNode.parentNode.remove()
    })
  }

})
