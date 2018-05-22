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

    let currentStorage = JSON.parse(localStorage.getItem("item"))

    let badge = document.getElementById('badge')
    console.log(badge)

    if(currentStorage === null){
      currentStorage = []
    }

    badge.innerHTML = `items in cart ${currentStorage.length}`

    var plusButton = document.getElementsByClassName('btn-floating')

    for (let i = 0; i < plusButton.length; i++) {
      plusButton[i].setAttribute('id', `${i}`)
      plusButton[i].addEventListener('click', function(event) {
        event.preventDefault()
        if(currentStorage === null){
          currentStorage = []
          currentStorage.push(i)
          console.log(currentStorage)
        }

        else if(currentStorage !== null){
          currentStorage.push(i)
          console.log(currentStorage)
        }
        localStorage.setItem("item", JSON.stringify(currentStorage))
        badge.innerHTML = `items in cart ${currentStorage.length}`
      })
    }
  });
});
