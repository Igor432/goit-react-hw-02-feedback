import PropTypes from 'prop-types'; // ES6
import style from '../feedback/feedback.module.css';
import good from '../icons/checked.png';
import bad from '../icons/close.png';
import neutral from '../icons/confused.png';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optika = Object.keys(options);

  const img = {
    good,
    neutral,
    bad,
  };

  return (
    <div >
      <p className={style.p}>Please, leave feedback</p>
<ul className={style.button_list}>
      {optika.map(optio => (
        <li className={style.button_item}>
        <button
          className={style.feedback_button}
          type="button"
          key={optio}
          onClick={() => onLeaveFeedback(optio)}
        >
          <img src={img[optio]} alt="" width="50" height="auto" className={style.option_image}/>
          <br />
          {optio}
        </button>
        </li>
      ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
