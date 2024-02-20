import React from 'react';
import './Tips.css';
import TIPS from '../../utils/TIPS.js';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook.js';

function Tips() {
  const listOfTips = TIPS;
  const { saveKeyWord } = useSearch();

  function getRandomWords(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const randomWords = getRandomWords(listOfTips, 6);

  function handleClick(item) {
    saveKeyWord(item);
  }

  return (
    <div className="tips">
      {randomWords.map((item) => (
        <button onClick={() => handleClick(item)} className="tips__element">
          {item}
        </button>
      ))}
    </div>
  );
}
export default Tips;
