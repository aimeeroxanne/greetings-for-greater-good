$.getJSON("js/items.json", function(data) {

// Getting the array of id's in localStorage

  let storage = JSON.parse(localStorage.getItem("item"))

// Compares id's stored in localStorage array to id's of products in items.json

  for (let j = 0; j < storage.length; j++) {
    for (let i = 0; i < data.length; i++) {
      if (storage[j] === data[i].id) {

        var itemHTML =
          `<div class="holder" id="${data[i].id}"><div class="item row section">
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


  // Getting all prices from cart using the class 'price'

  let prices = document.getElementsByClassName('price')
  let total = []

  // Looping through the returned array of h5 values and splitting them ["$5"] -> ["$", "5"], pushing the second value ["5"] to total array

  for (let k = 0; k < prices.length; k++) {
    let result = prices[k].innerHTML.split('')
    total.push(result[1])
  }

  // ["5", "5", "5", "5"] -> 20 (applying .map to total to parse strings to numbers, then applying .reduce to get the total)

  function add(arr) {
    return arr.map(Number).reduce((a, b) => a + b)
  }

  // passing total to add function and storing it in variable parsedTotal

  let parsedTotal = add(total)

  //getting cart total h5, storing it in variable printedTotal and setting the innerHTML to parsedTotal with string interpolation

  let printedTotal = document.getElementById('cart-total')
  printedTotal.innerHTML = `Total $${parsedTotal}`


  let close = document.getElementsByClassName('close')

  // console.log(close)

  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
      close[i].parentNode.parentNode.parentNode.remove()
      let itemId = event.target.parentNode.parentNode.parentNode.getAttribute('id')
      let storageElement = storage.indexOf(parseInt(itemId))
      console.log(storageElement)

      storage.splice((storageElement), 1)

      console.log(storage)

      localStorage.setItem("item", JSON.stringify(storage))
      console.log(storage)

      if (storage.length === 1){
        localStorage.clear()
      }

      parsedTotal = parsedTotal-5
      printedTotal.innerHTML = `Total $${parsedTotal}`

    })
  }

})
