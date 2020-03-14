import messageData from '../../helpers/data/messageData';

import displayMessage from '../displayMessage/displayMessage';

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  console.error(allMessages);
  const newMessageObject = {
    messageId: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
  };
  console.error(newMessageObject);
  messageData.setUpdatedMessageArray(newMessageObject);
  console.error(allMessages);
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject };
