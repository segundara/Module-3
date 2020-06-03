const url = "https://striveschool.herokuapp.com/api/product/";

const username = 'user24';
const password = '48D4vaVh6Ra3DD8w';

const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));


const getProducts = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    console.log(response)
    return await response.json();
  };

  
const getProduct = async (id) => {
  let response = await fetch(url + id,{
    method: "GET",
    headers: headers,
  });
  console.log(response)
  return await response.json();
};

const saveProducts = async (productDetail) => {
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(productDetail),
    headers: headers,
  });
  console.log(response)
  return response;
};

const editProduct = async (id, productDetail) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(productDetail),
    headers: headers,
  });
  return response;
};

const deleteProduct = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
    headers: headers,
  });
  return response;
};
