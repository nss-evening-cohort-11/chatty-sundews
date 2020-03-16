import moment from 'moment';
import messageData from '../../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';

const selectedRadio = () => {
  let selectedUser = '';
  Array.from($('.form-check-input')).forEach((user) => {
    if (user.checked) {
      selectedUser = user.id;
    }
  });
  return selectedUser;
};

const enableClearButton = () => {
  const clearButtonEnabled = document.getElementById('btn-clear');
  clearButtonEnabled.disabled = false;
};

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  const newMessageObject = {
    id: selectedRadio(),
    messageId: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
    timestamp: moment().format('LLL'),
  };
  messageData.setUpdatedMessageArray(newMessageObject);
  $('#messageInputField').val('');
  enableClearButton();
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject, selectedRadio };
