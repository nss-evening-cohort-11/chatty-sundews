import utilities from '../../helpers/utilities';

const clearMessageButton = () => {
  let domString = '<div>';
  domString += '';
  domString += '</div>';
  utilities.printToDom('message-container', domString);
};

export default { clearMessageButton };
