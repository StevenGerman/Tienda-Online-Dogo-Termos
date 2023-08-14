//Cambio de numero input de cantidad de productos.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    //console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <=0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    //console.log(userInputNumber);
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
    //priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
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
        productContainer.innerHTML = `<p class="cart-empty">Tu carrito esta vacio</p>`;
    }else{
        drawProductModal();
    }
})

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">El carrito esta vacio</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

//Cambiar imagenes con los botones flecha.
const imageContainer = document.querySelector(".gallery__image-container");
const previusGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");

let imgIndex = 1;

// const imageUrls = [
//     './images/Termo-Blanco-1L/img-termo-1.jpeg',
//     './images/Termo-Blanco-1L/img-termo-2.jpeg',
//     './images/Termo-Blanco-1L/img-termo-3.jpeg',
//     './images/Termo-Blanco-1L/img-termo-4.jpeg'
// ]

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})
previusGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
})


//Cambiar las imagenes principales desde las mineaturas.
let galleryMiniaturas = document.querySelectorAll('.gallery__thumnail');
galleryMiniaturas = [...galleryMiniaturas];
console.log(galleryMiniaturas);

galleryMiniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', event=>{
        console.log(event.target.id);
        imageContainer.style.backgroundImage = `url('./images/Termo-Blanco-1L/img-termo-${event.target.id}.jpeg')`
    })
})

//Cambiar las imagenes principales desde las mineaturas en el modal.

let modalMiniaturas = document.querySelectorAll('.modal-gallery__thumnail');
modalMiniaturas = [...modalMiniaturas];
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
modalMiniaturas.forEach(modalMineatura =>{
    modalMineatura.addEventListener('click', event=>{
        console.log(event.target.id.slice(-1));
        modalImageContainer.style.backgroundImage = `url('./images/Termo-Blanco-1L/img-termo-${event.target.id.slice(-1)}.jpeg')`
    })
});

//cambiar imagen principal de modal desde flechas.
const nextModalBtn = document.querySelector('.modal-gallery__previous');
const previousModalBtn = document.querySelector('.modal-gallery__next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(modalImageContainer);
});
previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
})


//modastrar navbar-modal
const menuBtn = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar');
const modalNavbarBack = document.querySelector('.modal-navbar__background');
const menuCloseBtn = document.querySelector('.modal-navbar__close-icon');
menuBtn.addEventListener('click', ()=>{
    modalNavbar.style.display = 'block';
    console.log("Junca");
    modalNavbarBack.style.display = 'block';
})
menuCloseBtn.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
    modalNavbarBack.style.display = 'none';
})


//funciones

//funcion para comprovar si estamos en desktop
function isDesktop() {
  return window.innerWidth > 375; // Puedes ajustar este valor según tus necesidades
}
//Mostrar el modal de imagenes cuando ahgo click en la imagen pricipal.
    const imagesModal = document.querySelector('.modal-gallery__background');
    const closeModalBtn = document.querySelector('.modal-gallery__close-container');

    imageContainer.addEventListener('click', ()=>{
        
        if(isDesktop()){
            
            imagesModal.style.display = 'grid';
        }
    });

    closeModalBtn.addEventListener('click', ()=>{
        imagesModal.style.display = 'none';
    })



function drawProductModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/Termo-Blanco-1L/img-termo-2.jpeg" alt="thumnail">
        <div>
            <p class="cart-modal__product">Vacuum Bottle Blanco 1L</p>
            <p class="cart-modal__price">$125.00 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
    <button class="cart-modal__finalizar-compra" >Finalizar Compra</button>
    </div>`
    deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgConteiner){
    if(imgIndex == 4){
        imgIndex = 1;
    }else{
        imgIndex++;    
    }
    
    imgConteiner.style.backgroundImage = `url('./images/Termo-Blanco-1L/img-termo-${imgIndex}.jpeg')`
}
function changePreviousImage(imgConteiner){
    if(imgIndex == 1){
        imgIndex = 4;
    }else{
        imgIndex--;    
    }   
    imgConteiner.style.backgroundImage = `url('./images/Termo-Blanco-1L/img-termo-${imgIndex}.jpeg')`
}