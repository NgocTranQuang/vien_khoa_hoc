import { Slide } from '@material-ui/core';
import * as React from 'react';
import './index.css'
import slideList from './TestimonialsData'
export interface ItemSlideProps {
}

export default function ItemSlide(props: ItemSlideProps) {

    return (
        <div>
            <Slide >
                <div></div>
                {/* {slideList.map((each, index) => (
                    <div></div>
                ))} */}
            </Slide>

        </div>
    );
}
