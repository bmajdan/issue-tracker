import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'common/containers/Application';
import ErrorBoundary from 'common/containers/ErrorBoundary';
import 'common/styles/main.scss';

ReactDOM.render(
    <ErrorBoundary>
        <Application />
    </ErrorBoundary>,
    document.getElementById('root')
);
