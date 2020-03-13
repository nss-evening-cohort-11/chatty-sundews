import messageData from '../../helpers/data/messageData';

import displayMessage from '../displayMessage/displayMessage';

// const addMessageButtonEvent = () => {
//   $('body').on('click', '#exampleFormControlTextarea1', buildMessageCard);
//   // $('body').on('keypress', '#exampleInputEmail1', buildMessageCard (e) {
//   //   if (e.which === 13) {
//   //     const newMessage = $(this).val();
//   //     buildMessageCard(newMessage);
//   //   }
//   // });
// };

// const buildMessageCard = () => {
//   const newMessageObject = {};
//   let domString = '<div class="card text-center">';
//   domString += '<div class="card-header">User name will go here</div>';
//   domString += '<div class="card-body">';
//   domString += `<p class="card-text">${newMessageObject.text}</p>`;
//   domString += '</div>';
//   domString += '<div class="card-footer text-muted">Timestamp will go here</div>';
//   domString += '</div>';
//   domString += '</div>';
//   return domString;
// };

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  console.error(allMessages);
  const newMessageObject = {
    id: `message${allMessages.length + 1}`,
    text: document.getElementById('messageInputField').value,
  };
  console.error(allMessages);
  messageData.setUpdatedMessageArray(newMessageObject);
  console.error(allMessages);
  displayMessage.displayAllMessages();
};

export default { buildNewMessageObject };
