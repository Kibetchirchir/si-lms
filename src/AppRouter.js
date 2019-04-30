import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from './components/home';
import AddParcel from './components/AddParcel';
import Parcel from './components/parcel'

import Header from './components/Headers';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/parcel" component={AddParcel} />
                <Route path="/parcels" component={Parcel} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
