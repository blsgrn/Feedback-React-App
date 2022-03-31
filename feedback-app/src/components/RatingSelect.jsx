import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select, selected }) {
  const handleChange = (e) => {
    select(+e.currentTarget.value);
    // the value is string. to change it to number +e . check it by puting typeof in front of e.curre
    // ntTarget.value
  };
  // Note: handleChange function passess selected as an argument to another function called select
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    select(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
