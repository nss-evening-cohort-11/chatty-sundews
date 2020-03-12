import messageData from '../../helpers/data/messageData';

const buildMessageCard = (newMessage) => {
  let domString = '<div class="card text-center">';
  domString += '<div class="card-header">User Name</div>';
  domString += '<div class="card-body">';
  domString += `<p class="card-text">${newMessage.text}</p>`;
  domString += '</div>';
  domString += '<div class="card-footer text-muted">Timestamp will go here</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

const buildNewMessageObject = (e) => {
  const allMessages = messageData.getMessages();
  e.preventDefault();
  const newMessageObject = {
    id: `message${allMessages.length + 1}`,
    text: document.getElementById('exampleInputEmail1').value,
  };
  messageData.setUpdatedMessageArray(newMessageObject);
  console.error('allMessages');
  document.getElementById('exampleInputEmail1').reset();
  buildMessageCard(newMessageObject);
};

const addMessageButtonEvent = () => {
  $('body').on('click', '#exampleInputEmail1', buildMessageCard);
  // $('body').on('keypress', '#exampleInputEmail1', buildMessageCard (e) {
  //   if (e.which === 13) {
  //     const newMessage = $(this).val();
  //     buildMessageCard(newMessage);
  //   }
  // });
};

export default { buildNewMessageObject, addMessageButtonEvent };
