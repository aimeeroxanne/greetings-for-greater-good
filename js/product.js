console.log('hi!')

let items = [
  {
    name: 'Flower Power',
    type: 'mothers',
    descriptionShort: 'Hand painted card by Steph Stout for MESA - Moving to End Sexual Assault',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/flowers.jpg',
    id: 0
  },

  {
    name: 'Live Life',
    type: 'thinking',
    descriptionShort: 'Hand drawn type by Elle Levy for MESA — Moving to End Sexual Assault',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/palm.jpg',
    id: 1
  },

  {
    name: 'You Are Special',
    type: 'birthday',
    descriptionShort: '3D card perfect for your pastry loving bff. Collaged by Michelle Merlin for MESA',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/donuts.jpg',
    id: 2
  },

  {
    name: 'Merry',
    type: 'holiday',
    descriptionShort: 'Simple non-denominational holiday card by Steph Stout for MESA',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/love.jpg',
    id: 3
  },

  {
    name: 'Wildflowers',
    type: 'thinking',
    descriptionShort: 'Lovely hand painted wildflowers for your hippie friend, lover or sibling. By Optimystic for MESA',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/flower2.jpg',
    id: 4
  },

  {
    name: 'Mom',
    type: 'mothers',
    descriptionShort: 'Cut paper card for your hella special mother by Elle Levy for MESA',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/mom.png',
    id: 5
  },

  {
    name: 'Christmas',
    type: 'holiday',
    descriptionShort: 'Classic Christmas card with gold leaf lettering By Optimystic for MESA',
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
    price: 5,
    img: 'img/shop/xmas1.jpg',
    id: 6
  },

  {
    name: 'Cuando Llueva',
    type: 'birthday',
    descriptionShort: "A Birthday isn't always a joyous occasion. By Elle Levy for MESA",
    descriptionLong: "Twitter termsheet iPad. Funding product management user experience technology stock. Disruptive incubator client A/B testing. Innovator venture deployment infographic. Venture incubator rockstar hypotheses marketing alpha buyer conversion vesting period interaction design ownership.",
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
      `<div class="col s12">
        <a href="#!" class="breadcrumb black-text">shop</a>
        <a href="#!" class="breadcrumb black-text">${product.name}</a>
      </div>
      <div>
        <img src=${product.img} class="col s12 m6 l6">
      </div>
      <div class="product-description col s12 m6 l6">
        <h5>${product.name} — $${product.price}</h5>
        <p>${product.descriptionLong}</p>
        <a href="#" class="waves-effect waves-teal btn-flat pink accent-1" target="_blank">Add to Cart</a>
      </div>`

    var productPage = document.getElementById('product')

    productPage.innerHTML = itemHTML

});
