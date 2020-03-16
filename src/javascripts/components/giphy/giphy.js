import utilities from '../../helpers/utilities';
import gifs from '../../helpers/data/messageData';
import './giphy.scss';

const selectedGif = (e) => {
  const clickedGifImage = e.target.closest('.gif').id;
  const gifsArray = gifs.getGifsArray();
  const selectedGifImage = gifsArray.filter((x) => x.id === clickedGifImage);
  if ($(`#${clickedGifImage}`).not('.selected-gif')) {
    $('.gif').removeClass('selected-gif');
    $(`#${clickedGifImage}`).addClass('selected-gif');
  }
  $('#gif-select').removeClass('invisible');
  $('#gif-select').addClass('visible');
  console.error(selectedGifImage);
};

const testGiphy = (giphy) => {
  let domString = '';
  const gifsArray = gifs.getGifsArray();
  giphy.data.forEach((giphyArray) => {
    const giphyImage = giphyArray.images.original.url;
    const gifObject = {
      id: giphyArray.id,
      url: giphyImage,
    };
    domString += `<a href="#"><img id="${giphyArray.id}" class="gif rounded col-5 m-1 p-0" src="${giphyImage}"></a>`;
    gifsArray.push(gifObject);
  });
  utilities.printToDom('giphy', domString);
  $('.gif').on('click', selectedGif);
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
