import './customThemes.scss';

const applyCustomTheme1 = () => {
  if ($('#customTheme1[type=radio]').is(':checked')) {
    $('#message-container').addClass('tempColor');
  }
};

const applyCustomThemeClick = () => {
  $('#btn-save-theme-changes').on('click', applyCustomTheme1);
};

const changeThemeEvent = () => {
  $('#modalCustomThemes').modal('show');
};

const changeThemeButtonClick = () => {
  $('#btn-change-theme').on('click', changeThemeEvent);
};

export default { changeThemeButtonClick, applyCustomThemeClick };
