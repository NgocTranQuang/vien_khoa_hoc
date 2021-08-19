import * as React from 'react';
import { translate } from '../../../../i18n/index';
import CoursesItem, { CoursesItemProps } from './CoursesItem';
import './coursesindex.css'
export interface CoursesProps {
}

export default function Courses(props: CoursesProps) {
    var course = {
        name: "Wayner Rooney",
        imgURL: "http://gonthemes.info/eschool/wp-content/uploads/2018/07/courses-01.jpg",
        avatarURL: "http://gonthemes.info/eschool/wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg",
        description: "Complete Python Bootcamp",
        numberOfStar: 3,
        price: "$339.00",
        titleButton: "Buy this course",
        priceToShow: "$339.00"

    }
    var course2 = {
        name: "Wayner Rooney",
        imgURL: "http://gonthemes.info/eschool/wp-content/uploads/2018/07/courses-01.jpg",
        avatarURL: "http://gonthemes.info/eschool/wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg",
        description: "Complete Python Bootcamp",
        numberOfStar: 3,
        price: "",
        titleButton: "Enroll",
        priceToShow: "Free"

    }
    var listCourse: CoursesItemProps[] = [course, course2, course, course, course, course, course, course]

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
