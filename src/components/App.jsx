import Feedback from './feedback/Feedback.jsx';
import style from './feedback/feedback.module.css';

export const App = () => {
  return (
    <div className={style.main}>
      <Feedback />
    </div>
  );
};
