import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from 'common/components/Loader';

const Dashboard = Loadable({
    loader: () => import('modules/Dashboard'),
    loading: Loader,
});

const Page404 = Loadable({
    loader: () => import('modules/Page404'),
    loading: Loader,
});

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route component={Page404} />
        </Switch>
    );
};

Routes.propTypes = {
    location: PropTypes.shape({}).isRequired,
};

export default withRouter(Routes);
