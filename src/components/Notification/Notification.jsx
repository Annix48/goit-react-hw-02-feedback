import css from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <p className={css.title}>{message}</p>
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;
