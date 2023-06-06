import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

import Notification from 'components/Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.container}>
      {total() > 0 ? (
        <>
          <div className={css.innerContainer}>
            <p>
              <b>Good</b>: {good}
            </p>
            <p>
              <b>Neutral</b>: {neutral}
            </p>
            <p>
              <b>Bad</b>: {bad}
            </p>
          </div>

          <div>
            <p>
              <b>Total</b>: {total()}
            </p>
            <p>
              <b>Positive Feedback</b>: {positivePercentage()}%
            </p>
          </div>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
