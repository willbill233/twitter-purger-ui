import React, { useState } from 'react';

interface ButtonBarProps {
    onAnalyseClick: () => void;
    onInstructionsClick: () => void;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ onAnalyseClick, onInstructionsClick }) => {
    return (
      <div className="flex justify-center my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onInstructionsClick}
        >
          Instructions
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
          onClick={onAnalyseClick}
        >
          Analyze My Tweets
        </button>
      </div>
    );
  };

export default ButtonBar;
