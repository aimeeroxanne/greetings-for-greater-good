$(document).ready(function(){
  $('.sidenav').sidenav();

$.getJSON("js/items.json", function(data) {

  for(let i = 0; i < data.length; i++){
    var itemHTML =
      `<a href="product.html?id=${data[i].id}"><div class="card">
          <div class="card-image">
            <img src=${data[i].img}>
            <a class="btn-floating halfway-fab waves-effect waves-light grey lighten-3" href="#"><i class="material-icons">add</i></a>
            </div>
          <div class="card-content center-align">
            <h6>${data[i].name}</h6>
            <h6>$${data[i].price}</h6>
            <p>${data[i].descriptionShort}</p>
          </div>
        </div></a>`

    var shop = document.getElementById('shop')
    var card = document.createElement('div')
    card.classList.add('col','s12','m6','l3')
    card.innerHTML = itemHTML
    shop.appendChild(card)
  }

  var plusButton = document.getElementsByClassName('btn-floating')
  console.log(plusButton)

  let count = 1

let storage = []

  for (let i = 0; i < plusButton.length; i++){
    plusButton[i].setAttribute('id', `${i}`)
    plusButton[i].addEventListener('click', function(){
      storage.push(i)
      localStorage.setItem("item", JSON.stringify(storage))
      var badge = document.getElementById('badge')
      var badgeHTML = `<span class="badge">${count}</span>`
      badge.innerHTML = badgeHTML
      count++
    })
  }

});
});

// <div class="item row section">
//   <div class="col s2 m2 l2">
//     <i class="material-icons">close</i>
//   </div>
//   <img class="col s3 m3 l3" src="img/shop/flowers.jpg">
//   <div class="col s3 m4 l4">
//     <h5>Mom Card</h5>
//     <p>36 card perfect for your pastry loving bff. Collaged by Michelle Merlin for MESA</p>
//   </div>
//   <div class="col s2 m2 l2 right">
//     <h5 class"align-right">$5</h5>
//   </div>
// </div>
// <div class="divider"></div>
