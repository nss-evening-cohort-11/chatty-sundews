import utilities from '../../helpers/utilities';

const testGiphy = (data) => {
  let domString = '';
  console.error(data);
  data.data.forEach((arr) => {
    const giphyImage = arr.images.original.url;
    domString += `<img src="${giphyImage}">`;
    console.error(giphyImage);
  });
  utilities.printToDom('giphy', domString);
};

const giphy = () => {
  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=KWlbcPJCe7ChYy6da2xuocbKh0K2XGwO&limit=10');
  xhr.done((data) => testGiphy(data));
};

const giphyEvents = () => {
  $('#giph-btn').on('click', giphy);
};

export default { giphyEvents, testGiphy };
