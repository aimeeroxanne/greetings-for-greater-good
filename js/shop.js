$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip({delay:50});

  $.getJSON("js/items.json", function(data) {

    for (let i = 0; i < data.length; i++) {
      var itemHTML =
        `<a href="product.html?id=${data[i].id}"><div class="card">
          <div class="card-image">
            <img src=${data[i].img}>
            <a class="btn-floating halfway-fab waves-effect waves-light grey lighten-3"><i class="material-icons">add</i></a>
            </div>
          <div class="card-content center-align">
            <h6>${data[i].name}</h6>
            <h6>$${data[i].price}</h6>
            <p>${data[i].descriptionShort}</p>
          </div>
        </div></a>`

      var shop = document.getElementById('shop')
      var card = document.createElement('div')
      card.classList.add('col', 's12', 'm6', 'l3')
      card.innerHTML = itemHTML
      shop.appendChild(card)
    }

    var plusButton = document.getElementsByClassName('btn-floating')

    let count = 1

    let storage = []

    for (let i = 0; i < plusButton.length; i++) {
      plusButton[i].setAttribute('id', `${i}`)
      plusButton[i].addEventListener('click', function(event) {
        event.preventDefault()
        storage.push(i)
        localStorage.setItem("item", JSON.stringify(storage))
        var badge = document.getElementById('badge')
        var badgeHTML = `<span class="badge">${count}</span>`
        badge.innerHTML = badgeHTML
        count++
        localStorage.setItem('numItems',`${count}`)
      })
    }

    // let itemsInCart = JSON.parse(localStorage.getItem('item'))
    //
    // console.log(itemsInCart.length)
    // localStorage.setItem('numItems',`${itemsInCart.length}`)

  });
});
