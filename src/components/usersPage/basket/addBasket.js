function addBasket(id) {
  let keys = [];
  if (localStorage.getItem("keys")) {
    keys = JSON.parse(localStorage.getItem("keys"));
    if (!keys.includes(id)) {
      keys.push(id);
    }
    console.log(keys);
    localStorage.setItem("keys", JSON.stringify(keys));
  } else {
    keys.push(id);
    localStorage.setItem("keys", JSON.stringify(keys));
  }
}

export default addBasket;
