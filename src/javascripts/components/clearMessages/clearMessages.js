import utilities from '../../helpers/utilities';

const clearMessageAction = (e) => {
  e.preventDefault();
  let domString = '<div>';
  domString += '';
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

const clearMessageEvent = () => {
  $('#btn-clear').on('click', clearMessageAction);
};

export default { clearMessageAction, clearMessageEvent };
