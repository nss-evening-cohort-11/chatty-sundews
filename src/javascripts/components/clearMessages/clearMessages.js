import utilities from '../../helpers/utilities';

const clearMessageButton = () => {
  let domString = '<div>';
  domString += '';
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

const clearMessageFunction = () => {
  $('body').on('click', '#btn-clear', clearMessageButton());
};

export default { clearMessageButton, clearMessageFunction };
