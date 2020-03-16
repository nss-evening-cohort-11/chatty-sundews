import './largeText.scss';

const largeTextFunction = () => {
  if ($('#largeTextBtn[type=checkbox]').is(':checked')) {
    $('#message-container').addClass('large-text new-display');
    $('#nav-container').addClass('large-text new-display');
  } else {
    $('#message-container').removeClass('large-text new-display');
    $('#nav-container').removeClass('large-text new-display');
  }
};

const largeTextEvents = () => {
  $('#largeTextBtn').on('click', largeTextFunction);
};

export default { largeTextEvents };
