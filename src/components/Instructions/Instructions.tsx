import React from "react";

const Instructions: React.FC = () => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
            <p className="text-lg">
                Press Analyze My Tweets to begin! We'll analyze your last 1000 tweets and identify some
                potentially problematic tweets and highlight your most positive tweets!
            </p>
        </div>
    );
};

export default Instructions;