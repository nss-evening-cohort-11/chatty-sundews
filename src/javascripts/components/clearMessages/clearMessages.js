
import messageData from '../../helpers/data/messageData';
import displayMessages from '../displayMessage/displayMessage';

const disableClearButton = () => {
  const clearButtonDisabled = document.getElementById('btn-clear');
  clearButtonDisabled.disabled = true;
};

const clearMessageAction = (e) => {
  e.preventDefault();
  messageData.emptyMessages();
  displayMessages.displayAllMessages();
  disableClearButton();
};
const clearMessageEvent = () => {
  $('#btn-clear').on('click', clearMessageAction);
};

export default { clearMessageAction, clearMessageEvent };
