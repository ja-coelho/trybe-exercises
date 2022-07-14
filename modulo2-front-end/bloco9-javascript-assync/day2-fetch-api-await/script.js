// apiScript.js
const API_URL_JOKE = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' }
  };

  fetch(API_URL_JOKE, myObject)
    .then(response => response.json())
    .then(data => {
      const jokeContainer = document.querySelector('#jokeContainer');
      jokeContainer.innerText = data.joke;
    });
};

const getCurrencyRates = async () => {
  const fetchObject = {
    baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`,
    endPoint: `/currencies/usd.min.json`
  };
  const url = fetchObject.baseUrl + fetchObject.endPoint;
  const coinData = await fetch(url)
    .then(response => response.json())
    .then(data => data.usd.brl)
    .catch((error) => error.toString());
  return coinData;
};

const cryptoValue = async () => {
  const usdValue =  await getCurrencyRates();
  console.log(usdValue);
  await fetch('https://api.coincap.io/v2/assets/')
    .then(response => response.json())
    .then((data) => {
      const cryptoContainer = document.querySelector('#cryptoContainer');
      const cryptoList = document.createElement('ul');
      cryptoContainer.appendChild(cryptoList);
      const filteredData = data.data.filter((item, index) => (index < 10));
      filteredData.forEach((coin) => {
        const cryptoItem = document.createElement('li');
        const coinValue = parseFloat(coin.priceUsd) * usdValue;
        cryptoItem.innerText = `${coin.name} - ${coin.symbol} - ${coinValue.toFixed(2)}`;
        cryptoList.appendChild(cryptoItem);
      });
    })
    .catch((error) => error.toString());
}

window.onload = () => fetchJoke();
window.onload = () => cryptoValue();