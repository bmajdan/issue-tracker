import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, icon, text }) => (
    <div className="button__container" onClick={onClick}>
        <span className="button__icon">{icon}</span>
        <span className="button__text">{text}</span>
    </div>
);

Button.defaultProps = {
    icon: '',
    text: '',
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    text: PropTypes.string,
};

export default Button;
