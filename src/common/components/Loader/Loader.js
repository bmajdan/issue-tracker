import React from 'react';
import PropTypes from 'prop-types';
import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

const Loader = ({ type, color, width, height, ...rest }) => (
    <div className="loader__container">
        <LoaderSpinner type={type} color={color} width={width}
            height={height} {...rest}
        />
    </div>
);

Loader.defaultProps = {
    type: 'Puff',
    color: '#0747A6',
    width: 50,
    height: 50,
};

Loader.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Loader;
