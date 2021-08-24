import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATH_HOME, PATH_ROOT } from '../../constants';
import Courses from './home/courses/Courses';
import HeaderHome from './home/header/HeaderHome';
import HomePage from './home/HomePage';
import { PATH_COURSES } from '../../constants/pathConstants';
import CoursesPage from './courses/CoursesPage';
export interface MainProps {
}

export default function Main(props: MainProps) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]
    return (
        <Switch>
            <Route path={PATH_COURSES}>
                <CoursesPage />
            </Route>
            <Route>
                <HomePage />
            </Route>

        </Switch>
    );
}
