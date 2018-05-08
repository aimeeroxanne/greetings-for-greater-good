console.log('hi!')

let items = [
  {
    name: 'Flower Power',
    type: 'mothers',
    description: 'Hand painted card by Steph Stout for MESA - Moving to End Sexual Assault',
    price: 5,
    img: 'img/shop/flowers.jpg',
    id: 0
  },

  {
    name: 'Live Life',
    type: 'thinking',
    description: 'Hand drawn type by Elle Levy for MESA — Moving to End Sexual Assault',
    price: 5,
    img: 'img/shop/palm.jpg',
    id: 1
  },

  {
    name: 'You Are Special',
    type: 'birthday',
    description: '3D card perfect for your pastry loving bff. Collaged by Michelle Merlin for MESA',
    price: 5,
    img: 'img/shop/donuts.jpg',
    id: 2
  },

  {
    name: 'Merry',
    type: 'holiday',
    description: 'Simple non-denominational holiday card by Steph Stout for MESA',
    price: 5,
    img: 'img/shop/love.jpg',
    id: 3
  },

  {
    name: 'Wildflowers',
    type: 'thinking',
    description: 'Lovely hand painted wildflowers for your hippie friend, lover or sibling. By Optimystic for MESA',
    price: 5,
    img: 'img/shop/flower2.jpg',
    id: 4
  },

  {
    name: 'Mom',
    type: 'mothers',
    description: 'Cut paper card for your hella special mother by Elle Levy for MESA',
    price: 5,
    img: 'img/shop/mom.png',
    id: 5
  },

  {
    name: 'Christmas',
    type: 'holiday',
    description: 'Classic Christmas card with gold leaf lettering By Optimystic for MESA',
    price: 5,
    img: 'img/shop/xmas1.jpg',
    id: 6
  },

  {
    name: 'Cuando LLueva',
    type: 'birthday',
    description: "A Birthday isn't always a joyous occasion. By Elle Levy for MESA",
    price: 5,
    img: 'img/shop/script.jpg',
    id: 7
  }
]

$(document).ready(function(){
  $('.sidenav').sidenav();
  let id = location.search.slice('1').split('=')[1]

  let product = items[id]

    var itemHTML =
      `<div class="col s6 m6 l6">
        <img src=${product.img}>
      </div>
      <div class="col s6 m6 l6">
        <h5>${product.name}</h5>
      </div>`

    var shop = document.getElementById('product')
    var card = document.createElement('div')
    card.classList.add('col','s6','m6','l6')
    card.innerHTML = itemHTML
    shop.appendChild(card)

});
