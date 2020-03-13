import './largeText.scss';

const largeTextFunction = () => {
  if ($('#largeTextBtn[type=checkbox]').is(':checked')) {
    $('div:first').addClass('large-text new-display');
  } else {
    $('div:first').removeClass('large-text new-display');
  }
};

const largeTextEvents = () => {
  $('#largeTextBtn').on('click', largeTextFunction);
};

export default { largeTextEvents };
