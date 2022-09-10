import PropTypes from 'prop-types'; // ES6
import style from '../feedback/feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optika = Object.keys(options);

  return (
    <div>
      <p className={style.p}>Please, leave feedback</p>

      {optika.map(optio => (
        <button
          className={style.feedback_button}
          type="button"
          key={optio}
          onClick={() => onLeaveFeedback(optio) }
        >
          {optio}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
