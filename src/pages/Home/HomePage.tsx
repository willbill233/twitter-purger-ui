import React from 'react';
import TwitterWidget from '../../components/TweetList/TwitterWidget';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <TwitterWidget/>
    </div>
    );
};

export default HomePage;
