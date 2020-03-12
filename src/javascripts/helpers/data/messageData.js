const messages = [
  {
    id: 'user1',
    name: 'Mary',
    timestamp: 'March 10, 2020 6:00 PM',
    text: 'Zoe is like a sundew plant with her twitchy habits-- she seems nice and then "SNAP" and she strikes.',
  },
  {
    id: 'user2',
    name: 'Luke',
    timestamp: 'March 10, 2020 6:10 PM',
    text: 'Yeah, her sweet side draws people in but then she devours them.',
  },
  {
    id: 'user1',
    name: 'Mary',
    timestamp: 'March 10, 2020 6:12 PM',
    text: 'I think she is about to devour me, maybe I should bring her pie.',
  },
  {
    id: 'user3',
    name: 'Zoe',
    timestamp: 'March 10, 2020 6:13 PM',
    text: 'Did someone say PIE?',
  },
  {
    id: 'user4',
    name: 'John',
    timestamp: 'March 10, 2020 6:16 PM',
    text: 'Is pie the only thing on your mind? Listen, your students need to know their sites need to include a meta tag.',
  },
  {
    id: 'user3',
    name: 'Zoe',
    timestamp: 'March 10, 2020 6:20 PM',
    text: 'The way they code a toe tag would be more appropriate.',
  },
];

const setUpdatedMessageArray = (newMessageObject) => {
  messages.push(newMessageObject);
};

const getMessages = () => messages;

export default { getMessages, setUpdatedMessageArray };
