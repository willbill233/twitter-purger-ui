import React from "react";
import { Tweet, TwitterUser } from "../../types/Twitter";

type TweetCardProps = {
  user: TwitterUser;
  tweet: Tweet
};

const TweetCard: React.FC<TweetCardProps> = ({ user, tweet }) => {
  return (
    <div className="border border-gray-300 rounded-lg pb-4 my-4 bg-white">
      <div className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-t-lg mb-4">
      </div>
      <div className="flex items-center px-4 mb-4">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile picture`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg">{user.name}</span>
          <span className="text-gray-500">@{user.handle}</span>
        </div>
      </div>
      <p className="text-lg px-4 mb-4">{tweet.text}</p>
      <div className="flex justify-between px-4">
        <span
          className={`${
            tweet.sentimentScore > 0
              ? "text-green-500"
              : tweet.sentimentScore < 0
              ? "text-red-500"
              : "text-gray-500"
          } text-sm`}
        >
          {tweet.sentimentScore > 0
            ? "Positive"
            : tweet.sentimentScore < 0
            ? "Negative"
            : "Neutral"}
        </span>
      </div>
    </div>
  );
};

export default TweetCard;
