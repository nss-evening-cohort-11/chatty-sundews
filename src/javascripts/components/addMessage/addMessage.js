import moment from 'moment';
import messageData from '../../helpers/data/messageData';
import displayMessage from '../displayMessage/displayMessage';
// import userData from '../../helpers/data/userData';

const selectedRadio = () => {
  let selectedUser = '';
  Array.from($('.form-check-input')).forEach((user) => {
    if (user.checked) {
      selectedUser = user.id;
    }
  });
  return selectedUser;
};

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  const newMessageObject = {
    id: selectedRadio(),
    messageId: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
    timestamp: moment().format('LLL'),
  };
  const findUser = newMessageObject.id;
  console.error(findUser);
  messageData.setUpdatedMessageArray(newMessageObject);
  $('#messageInputField').val('');
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject, selectedRadio };
