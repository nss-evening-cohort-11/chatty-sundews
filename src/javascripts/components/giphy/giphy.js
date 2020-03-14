
const giphy = () => {
  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=KWlbcPJCe7ChYy6da2xuocbKh0K2XGwO&limit=5');
  xhr.done((data) => { console.error('success got data', data); });
  return xhr;
};

const giphyFunction = () => {
  const myData = giphy();
  console.error(myData);
};

export default { giphy, giphyFunction };
