"use strict";

async function getJoke() {
  let response = await axios.get('https://icanhazdadjoke.com',
    { params: { Accept: "application/json" } });
  // let joke = response.data.querySelector('.subtitle, p')
  console.log(response.data);
}



getJoke();