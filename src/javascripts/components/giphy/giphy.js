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
  const giphyInput = $('#giphy-search').val();
  const xhr = $.get(`http://api.giphy.com/v1/gifs/search?api_key=KWlbcPJCe7ChYy6da2xuocbKh0K2XGwO&limit=10&q=${giphyInput}`);
  xhr.done((data) => testGiphy(data));
};

const openModal = () => {
  $('#giphyModal').modal('show');
  $('#giph-search-btn').on('click', giphy);
};

const giphyEvents = () => {
  $('#giph-btn').on('click', openModal);
};

export default { giphyEvents, testGiphy };
