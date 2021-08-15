import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATH_HOME } from '../../constants';
import NavBar from './base/components/nav/baseNavBar';
import HeaderHome from './home/header/HeaderHome';
export interface MainProps {
}

export default function Main(props: MainProps) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]
    return (
        <Switch>
            <Route>
                <HeaderHome listImage={LIST_IMAGE} />
            </Route>
        </Switch>
    );
}
