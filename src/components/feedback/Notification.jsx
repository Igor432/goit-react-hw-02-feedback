import PropTypes from 'prop-types'; // ES6

const Notification = ({ message }) => {
  return (
    <div className="">
      <p className="">{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
