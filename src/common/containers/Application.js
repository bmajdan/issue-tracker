import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'common/containers/Routes';
import ErrorBoundary from 'common/containers/ErrorBoundary';
import Header from 'common/components/Header';

const Application = () => (
    <ErrorBoundary>
        <Header />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </ErrorBoundary>
);

export default Application;
