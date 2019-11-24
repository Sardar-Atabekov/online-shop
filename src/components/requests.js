
const API =
  "https://cors-anywhere.herokuapp.com/https://my-demo-e-shop.herokuapp.com";

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

async function postData(url, data, token) {
  await fetch(`${API}${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

async function putData(url, data, token) {
  console.log(JSON.stringify(data));
  await fetch(`${API}${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      // Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => console.log(res))
    .catch(err => {
      console.error(err);
    });
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
      console.log("removed");
    })
    .catch(err => {
      console.error(err);
    });
}

export { getData, postData, putData, deleteData };
