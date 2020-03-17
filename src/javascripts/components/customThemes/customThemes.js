import '../darkMode/darkMode.scss';

const getBackground = () => {
  const selectedBackground = $('#background-color').val();
  console.error(selectedBackground);
  if (selectedBackground === '2') {
    $('#message-container').addClass('dark-display');
    $('#nav-container').addClass('dark-display');
    console.error('changing the background');
  } else {
    $('#message-container').removeClass('dark-display');
    $('#nav-container').removeClass('dark-display');
  }
};

const getFont = () => {
  const selectedFont = $('#font-color').val();
  console.error(selectedFont);
  if (selectedFont === '2') {
    $('#message-container').addClass('darker-font');
    $('#nav-container').addClass('darker-font');
    console.error('changing the font color');
  } else {
    $('#message-container').removeClass('darker-font');
    $('#nav-container').removeClass('darker-font');
  }
};

const applyCustomThemeEvent = () => {
  getBackground();
  getFont();
};

const applyCustomThemeClick = () => {
  $('#btn-save-theme-changes').on('click', applyCustomThemeEvent);
};

const changeThemeEvent = () => {
  $('#modalCustomThemes').modal('show');
};

const changeThemeButtonClick = () => {
  $('#btn-change-theme').on('click', changeThemeEvent);
};

export default { changeThemeButtonClick, applyCustomThemeClick, applyCustomThemeEvent };
