import './darkMode.scss';

const makeDark = () => {
  if ($('#darkModeBtn[type=checkbox]').is(':checked')) {
    $('#message-container').addClass('dark dark-display');
  } else {
    $('#message-container').removeClass('dark dark-display');
  }
};

const makeDarkEvents = () => {
  $('#darkModeBtn').on('click', makeDark);
};

export default { makeDarkEvents };
