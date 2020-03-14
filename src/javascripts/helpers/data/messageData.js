let messages = [
  {
    messageId: 'message1',
    id: 'user3',
    timestamp: 'March 10, 2020 6:00 PM',
    text: 'Zoe is like a sundew plant with her twitchy habits-- she seems nice and then "SNAP" and she strikes.',
  },
  {
    messageId: 'message2',
    id: 'user2',
    timestamp: 'March 10, 2020 6:10 PM',
    text: 'Yeah, her sweet side draws people in but then she devours them.',
  },
  {
    messageId: 'message3',
    id: 'user3',
    timestamp: 'March 10, 2020 6:12 PM',
    text: 'I think she is about to devour me, maybe I should bring her pie.',
  },
  {
    messageId: 'message4',
    id: 'user1',
    timestamp: 'March 10, 2020 6:13 PM',
    text: 'Did someone say PIE?',
  },
  {
    messageId: 'message5',
    id: 'user5',
    timestamp: 'March 10, 2020 6:16 PM',
    text: 'Is pie the only thing on your mind? Listen, your students need to know their sites need to include a meta tag.',
  },
  {
    messageId: 'message6',
    id: 'user1',
    timestamp: 'March 10, 2020 6:20 PM',
    text: 'The way they code a toe tag would be more appropriate.',
  },
];

const setUpdatedMessageArray = (newMessageObject) => {
  messages.push(newMessageObject);
};

const getMessages = () => messages;

const emptyMessages = () => {
  messages = [];
};

export default { getMessages, setUpdatedMessageArray, emptyMessages };
