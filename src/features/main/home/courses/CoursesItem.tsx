import * as React from 'react';
import Rating from '@material-ui/lab/Rating';

export interface CoursesItemProps {
    imgURL: string,
    avatarURL: string,
    name: string,
    description: string,
    numberOfStar: number,
    price: string
}

export default function CoursesItem(props: CoursesItemProps) {
    return (
        <div className="col l-4 m-6 c-12">
            <div className="item-courses__top">
                <img src={props.imgURL} alt="" />

            </div>
            <div className="item-course__middle">
                <img src={props.avatarURL} alt="" className="courses-avatar" />
            </div>
            <div className="item-course__name">{props.name}</div>
            <div className="item-course__des">{props.description}</div>
            <Rating name="read-only" value={props.numberOfStar} readOnly />

        </div>
    );
}
