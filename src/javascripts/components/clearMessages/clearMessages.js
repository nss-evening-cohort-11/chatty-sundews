import utilities from '../../helpers/utilities';

const clearMessageButton = () => {
  let domString = '<div>';
  domString += '';
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

const clearMessageFunction = () => {
  console.error('clear button click works');
  // $('body').on('click', '#btn-clear', clearMessageButton());
};

export default { clearMessageButton, clearMessageFunction };
