import * as React from 'react';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Courses from '../home/courses/Courses';
import CoursesHeader from './header/CoursesHeader';
import { PATH_COURSES_DETAIL } from '../../../constants/pathConstants';
import CoursesDetail from './coursesDetail/CoursesDetail'

export interface CoursesProps {
}

export default function CoursesPage(props: CoursesProps) {
    var parentPath = useRouteMatch();

    return (
        <div>
            <CoursesHeader title="Chương trình đào tạo" />
            <Switch>

                <Route path={parentPath.path + PATH_COURSES_DETAIL}>
                    <CoursesDetail />
                </Route>
                <Route>
                    <Courses showTitle={false} />
                </Route>
            </Switch>

        </div>
    );
}
