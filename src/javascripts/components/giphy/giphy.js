const testGiphy = (data) => {
  console.error(data);
  console.error(data.data[1].images.original.url);
};

const giphy = () => {
  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=KWlbcPJCe7ChYy6da2xuocbKh0K2XGwO&limit=5');
  xhr.done((data) => testGiphy(data));
};

const giphyFunction = () => {
  const myData = giphy();
  console.error(myData);
};

export default { giphy, giphyFunction };
