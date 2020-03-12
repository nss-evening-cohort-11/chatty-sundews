import './messageLimit.scss';
import messages from '../../helpers/data/messageData';

const getMessageLimit = () => {
  const myMessages = messages.getMessages();
  console.error(myMessages);
};

export default { getMessageLimit };
