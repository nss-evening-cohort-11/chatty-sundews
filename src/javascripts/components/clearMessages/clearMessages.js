import utilities from '../../helpers/utilities';

const disableClearButton = () => {
  const clearButtonDisabled = document.getElementById('btn-clear');
  clearButtonDisabled.disabled = true;
};

const clearMessageAction = (e) => {
  e.preventDefault();
  let domString = '<div>';
  domString += '';
  domString += '</div>';
  utilities.printToDom('message-container', domString);
  disableClearButton();
};

const clearMessageEvent = () => {
  $('#btn-clear').on('click', clearMessageAction);
};

export default { clearMessageAction, clearMessageEvent };
