//Cambio de numero input de cantidad de productos.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


//Agregar el total de productos, cuando se presiona el boton agregar al carrito.

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{    
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductModal();
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
})

//Mostrar modal-cart con el detalle del carrito

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    //cartModal.style.display = 'block';
    cartModal.classList.toggle('show');
    //priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;

    if(lastValue == 0){
        drawProductModal();
    }
})

//Borrar el contenido del carrito
const deleteProductBtn = document.querySelector('.cart-modal__delete');


deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">El carrito esta vacio</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
})

//funciones
function drawProductModal(){
    productContainer.innerHTML = `<div class="cart-modal__checkout-container">
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/Termo-Blanco-1L/foto-termo-blanco-1lt-tapa.jpeg" alt="thumnail">
        <div>
            <p class="cart-modal__product">Vacuum Bottle Blanco 1L</p>
            <p class="cart-modal__price">$125.00 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__finalizar-compra" >Finalizar Compra</button>
    </div>`
    
}