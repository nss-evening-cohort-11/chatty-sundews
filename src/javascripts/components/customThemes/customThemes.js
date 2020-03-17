import '../darkMode/darkMode.scss';

const getBackground = () => {
  const selectedBackground = $('#background-color :selected'.value);
  console.error(selectedBackground);
  if (selectedBackground === '2') {
    $('#message-container').addClass('dark dark-display');
    $('#nav-container').addClass('dark dark-display');
  }
};

const applyCustomThemeClick = () => {
  $('#btn-save-theme-changes').on('click', getBackground());
};

const changeThemeEvent = () => {
  $('#modalCustomThemes').modal('show');
};

const changeThemeButtonClick = () => {
  $('#btn-change-theme').on('click', changeThemeEvent);
};

export default { changeThemeButtonClick, applyCustomThemeClick, getBackground };
