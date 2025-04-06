const getCartFromLocalStorage =() => {
    const storedCartString = localStorage.get('cart')
    if(storedCartString){
        const storedCart = JSON.parse(storedCart)
        return storedCart;
    }
    return []
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStorage()
    const newCart = [...cart, id];
    saveCartToLocalStorage(newCart);
}

export {getCartFromLocalStorage, addItemToCartLocalStorage}