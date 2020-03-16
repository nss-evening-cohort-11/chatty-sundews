import '../darkMode/darkMode.scss';

const getBackground = () => {
  const selectedBackground = document.querySelector('.background');
  const output = selectedBackground.value;
  console.error(output);
  if (output === '2') {
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
