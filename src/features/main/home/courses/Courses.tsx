import * as React from 'react';
import { translate } from '../../../../i18n/index';
import CoursesItem, { CoursesItemProps } from './CoursesItem';
import './coursesindex.css'
import listCourse from './dataCourses';
export interface CoursesProps {
}

export default function Courses(props: CoursesProps) {

    return (
        <div className="course">
            <div className="course__title">
                {translate('Latest Courses')}
            </div>
            <div className="grid wide">
                <div className="row row-course">
                    {listCourse.map((item, index) => {
                        return <CoursesItem {...item} />
                    })}
                </div>
            </div>

        </div>
    );
}
