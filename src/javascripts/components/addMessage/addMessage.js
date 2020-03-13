import messageData from '../../helpers/data/messageData';

// const addMessageButtonEvent = () => {
//   $('body').on('click', '#exampleFormControlTextarea1', buildMessageCard);
//   // $('body').on('keypress', '#exampleInputEmail1', buildMessageCard (e) {
//   //   if (e.which === 13) {
//   //     const newMessage = $(this).val();
//   //     buildMessageCard(newMessage);
//   //   }
//   // });
// };

const buildMessageCard = () => {
  const newMessageObject = {};
  let domString = '<div class="card text-center">';
  domString += '<div class="card-header">User name will go here</div>';
  domString += '<div class="card-body">';
  domString += `<p class="card-text">${newMessageObject.text}</p>`;
  domString += '</div>';
  domString += '<div class="card-footer text-muted">Timestamp will go here</div>';
  domString += '</div>';
  domString += '</div>';
  return domString;
};

const buildNewMessageObject = () => {
  const allMessages = messageData.getMessages();
  const newMessageObject = {
    id: `message${allMessages.length + 1}`,
    text: document.getElementById('exampleFormControlTextarea1').value,
  };
  messageData.setUpdatedMessageArray(newMessageObject);
  console.error(allMessages);
  buildMessageCard();
};

const pressEnterEvent = () => {
  // eslint-disable-next-line prefer-arrow-callback
  $('#exampleFormControlTextarea1').keypress(function (event) {
    if (event.which === 13) {
      buildNewMessageObject();
    }
  });
};

export default { buildNewMessageObject, pressEnterEvent };
