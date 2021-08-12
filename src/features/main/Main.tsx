import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATH_HOME } from '../../constants';
import NavBar from './base/components/nav/baseNavBar';
export interface MainProps {
}

export default function Main(props: MainProps) {
    return (
        <Switch>
            <Route path={PATH_HOME}>
                <NavBar />
            </Route>
        </Switch>
    );
}
