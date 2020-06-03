const url = "https://striveschool.herokuapp.com/api/product/";

const username = 'user24';
const password = '48D4vaVh6Ra3DD8w';

const headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

// const getEvents = async () => {
//   let response = await fetch(url); // this is getting the response from the API fetching
//   return await response.json(); // this is returning the result of the promise in an usable format
// };

const getProducts = async () => {
    let response = await fetch(url, {
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
