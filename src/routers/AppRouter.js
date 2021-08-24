import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import ViewPage from '../components/ViewPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route component={NotFoundPage} />
                <Route path="/view/:id" component={ViewPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter;