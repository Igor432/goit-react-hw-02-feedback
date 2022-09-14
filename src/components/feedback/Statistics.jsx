import PropTypes from 'prop-types'; // ES6
import style from '../feedback/feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
     
      <ul className={style.statistics_list}>
        <li className={style.statistics_item}>Good: {good}</li>
        <li className={style.statistics_item}>Neutral: {neutral}</li>
        <li className={style.statistics_item}>Bad: {bad}</li>
        <li className={style.statistics_item}>Total: {total}</li>
        <li className={style.statistics_item}>
          Positive Feedback: {Math.floor(positivePercentage)}%
        </li>

        <li>
          <div className={style.chart}>
            <div
              className={style.color_chart}
              style={{
                backgroundColor: positivePercentage > 50 ? 'green' : 'red',
                width: (250 / 100) * positivePercentage + 'px',
                height: '25px',
              }}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
