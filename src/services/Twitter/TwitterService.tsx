import axios from 'axios';
import { TwitterResponse } from '../../types/Twitter';

const twitterResponse: TwitterResponse = {
  tweets: [
    {
      id: '1',
      text: 'I love TypeScript and React!',
      sentimentScore: 0.8,
    },
    {
      id: '2',
      text: 'React is so hard to learn!',
      sentimentScore: 0.2,
    },
    {
      id: '1',
      text: 'I love TypeScript and React!',
      sentimentScore: 0.8,
    },
    {
      id: '2',
      text: 'React is so hard to learn!',
      sentimentScore: 0.2,
    },
    {
      id: '1',
      text: 'I love TypeScript and React!',
      sentimentScore: 0.8,
    },
    {
      id: '2',
      text: 'React is so hard to learn!',
      sentimentScore: 0.2,
    },
  ],
  user: {
    id: '1',
    name: 'Will',
    handle: 'will',
    profilePicture: 'https://pbs.twimg.com/profile_images/1169525521467789313/juTpCru4_400x400.jpg'
  }
};

const getTweets = async (): Promise<TwitterResponse> => {
  const testing = true;
  if (testing) {
    return Promise.resolve(twitterResponse);
  }
  const response = await axios.get('http://localhost:3000/twitter/my-tweets');
  return response.data;
};

export default getTweets;
