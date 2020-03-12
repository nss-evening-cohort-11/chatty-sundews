import './messageLimit.scss';
import messages from '../../helpers/data/messageData';

const getMessageLimit = () => {
  const myMessages = messages.getMessages();
  const newMessages = myMessages.slice(-20);
  console.error('myMessages', myMessages, 'newMessages', newMessages);
};

export default { getMessageLimit };
