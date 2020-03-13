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
    <div class="messageCard card mb-3">
      <div class="closebtn"><i class="fas fa-trash" id="${message.id}"></i>
      </div>
      <div>
        <img src=${user.imgUrl} class="img-rounded col-3" alt="user">
          <div class="card-body p-0">
            <h3 class="messageName card-text">${user.name}</h3>
              <p class="messageText text-center card-text">${message.text}</p>
              <p class="timestamp"><small>${message.timestamp}</small></p>
          </div>
      </div>
    </div>`;
  });

  utilities.printToDom('message-container', domString);
};

export default { displayAllMessages };
