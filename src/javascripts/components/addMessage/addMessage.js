import messageData from '../../helpers/data/messageData';

import displayMessage from '../displayMessage/displayMessage';

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  const newMessageObject = {
    messageId: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
  };
  messageData.setUpdatedMessageArray(newMessageObject);
  $('#messageInputField').val('');
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject };
