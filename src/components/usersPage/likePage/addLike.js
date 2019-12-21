function addBasket(id) {
  let likes = [];
  if (localStorage.getItem("likes")) {
    likes = JSON.parse(localStorage.getItem("likes"));
    if (!likes.includes(id)) {
      likes.push(id);
    }
    console.log(likes);
    localStorage.setItem("likes", JSON.stringify(likes));
  } else {
    likes.push(id);
    localStorage.setItem("likes", JSON.stringify(likes));
  }
}

export default addBasket;
