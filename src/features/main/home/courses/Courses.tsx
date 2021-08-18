import * as React from 'react';
import { translate } from '../../../../i18n/index';
import CoursesItem, { CoursesItemProps } from './CoursesItem';
import './index.css'
export interface CoursesProps {
}

export default function Courses(props: CoursesProps) {
    // var listCourse: CoursesItemProps[] = [{
    //     name: ""
    // }]

    return (
        <div className="course">
            {/* <div className="course__title">
                {translate('Latest Courses')}
            </div>
            <div className="grid wide">
                <div className="row">
                    <CoursesItem />
                    <CoursesItem />
                    <CoursesItem />
                    <CoursesItem />
                </div>
            </div> */}

        </div>
    );
}
