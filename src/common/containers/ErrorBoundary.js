import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    constructor() {
        super();
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary__container">
                    <h1>Something went wrong.</h1>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
