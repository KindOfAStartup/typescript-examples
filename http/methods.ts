import fetch from "node-fetch";

function api(url)  {
  return fetch(url)
    .then(response => {

      return response.json()
    })

}

// Consumer
api('https://jsonplaceholder.typicode.com/users')
  .then((i) => {
    console.log(i)
  })
  .catch(error => {
    /* show error message */
  })