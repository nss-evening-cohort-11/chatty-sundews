import utilities from '../../helpers/utilities';

const testGiphy = (data) => {
  let domString = '';
  data.data.forEach((arr) => {
    const giphyImage = arr.images.original.url;
    domString += `<a href="#"><img src="${giphyImage}"></a>`;
  });
  utilities.printToDom('giphy', domString);
};

const giphy = () => {
  const xhr = $.get('http://api.giphy.com/v1/gifs/search?q=rainbow&api_key=KWlbcPJCe7ChYy6da2xuocbKh0K2XGwO&limit=10');
  xhr.done((data) => testGiphy(data));
};

const giphyValidation = () => {
  $('#giphyModal').modal('show');
  giphy();
};

const giphyEvents = () => {
  $('#giph-btn').on('click', giphyValidation);
};

export default { giphyEvents, testGiphy };
