const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShopingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopingCart.addEventListener('click', toggleMenuShoppingCart)

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClose) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClose) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleMenuShoppingCart() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push(
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },

);

productList.push(
  {
    name: 'Pantalla',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
);

productList.push(
  {
    name: 'Compu',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
);

for (const product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');



  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './ icons / bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfoDiv);

  cardsContainer.appendChild(productCard);
}