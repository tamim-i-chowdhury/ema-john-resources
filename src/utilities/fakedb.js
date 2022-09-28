// use local storage to manage cart data
const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  // add quantity
  const quantity = shoppingCart[id];
  // if the property does not exist in then object then, it
  // returns undefined
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  //  console.log(storedCart);
  // if the item doesn't already exist in the localStorage
  // then, it returns null
  return shoppingCart;
};
export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
