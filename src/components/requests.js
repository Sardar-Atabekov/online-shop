const API = "https://my-demo-e-shop.herokuapp.com";


// let token;
// if (localStorage.getItem("token")) {
//   token = localStorage.getItem("token");
// } else {
//   // console.log(window.location);
//   // console.log(localStorage.getItem("NotFound"));
//   // if (localStorage.getItem("NotFound")) {
//   //   localStorage.removeItem('NotFound');
//   // } else
//   if (window.location.pathname !== "/") {
//     setTimeout(() => (window.location.href = "/"), 3000);
//     // localStorage.removeItem('NotFound');
//   }
// }

async function getData(url) {
  try {
    let response = await fetch(`${API}${url}`, {
      method: "GET",
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    let body = await response.json();
    console.log(body);
    return body;
  } catch (err) {
    console.log(err); // TypeError: failed to fetch
  }
}

async function postData(url, data) {
  let req = await fetch(`${API}${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
}

async function putData(url, data) {
  console.log(JSON.stringify(data));
  let req = await fetch(`${API}${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  const res = await req.json();
  return res;
}

async function deleteData(url, token) {
  await fetch(`${API}${url}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}

export { getData, postData, putData, deleteData, API };
