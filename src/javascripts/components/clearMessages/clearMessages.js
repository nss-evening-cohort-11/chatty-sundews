
import messageData from '../../helpers/data/messageData';
import displayMessages from '../displayMessage/displayMessage';

const clearMessageAction = (e) => {
  e.preventDefault();
  messageData.emptyMessages();
  displayMessages.displayAllMessages();
};
const clearMessageEvent = () => {
  $('#btn-clear').on('click', clearMessageAction);
};

export default { clearMessageAction, clearMessageEvent };
