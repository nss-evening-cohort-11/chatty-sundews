import './displayMessage.scss';
import messageData from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  const users = userData.getUsers();
  let domString = '';
  messageData.getMessages().forEach((message) => {
    const user = users.find((x) => x.id === message.id);
    domString += `
    <div class="messageCard card mb-3 d-flex flex-wrap row" style="max-width: 640px">
      <div class="closebtn"><i class="fas fa-trash" id="${message.id}"></i>
      </div>
      <div>
        <img src=${user.imgUrl} class="img-rounded col-3" alt="user">
          <div class="card-body p-0 col-11">
            <h3 class="messageName card-text">${user.name}</h3>
              <p class="messageText text-center card-text d-flex flex-wrap">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
  });


  // chatMessages.forEach((message) => {
  //   domString += `
  // messageData.getMessages

  // <div class="messageCard mb-3">
  //   <span class="closebtn" id="${message.id}">x</span>
  //   <h3 class="messageName">${message.name}</h3>
  //   <p class="messageText text-center">${message.text}</p>
  //   <div class="timestamp">${message.timestamp}</div>
  // </div>

  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
