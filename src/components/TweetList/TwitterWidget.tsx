import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/Twitter/store';
import { fetchTweets } from '../../store/Twitter/thunk';
import { TwitterResponse } from '../../types/Twitter';
import ButtonBar from '../ButtonBar/ButtonBar';
import Instructions from '../Instructions/Instructions';
import TweetCard from './TweetCard';

interface TweetListProps {
}

const TwitterWidget: React.FC<TweetListProps> = ({ }) => {
    const dispatch = useDispatch();
    const [showTweetList, setShowTweetList] = useState(false);
    const [showInstructions, setShowInstructions] = useState(true);
    const { twitterResponse, loading, error } = useSelector((state: RootState) => state.tweets);


    const handleClick = () => {
        dispatch(fetchTweets());
        setShowInstructions(false);
        setShowTweetList(true);
    };

    const handleShowInstructions = () => {
        setShowInstructions(true);
        setShowTweetList(false);
    };

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }

    return (
        <div className="w-1/2 mx-auto">
            <ButtonBar onAnalyseClick={handleClick} onInstructionsClick={handleShowInstructions} />
            {showInstructions && <Instructions />}
            {showTweetList && (
                <>
                    {twitterResponse.tweets.map((tweet) => (
                        <TweetCard user={twitterResponse.user} tweet={tweet} />
                    ))}
                </>
            )}
        </div>
    );
};

export default TwitterWidget;
