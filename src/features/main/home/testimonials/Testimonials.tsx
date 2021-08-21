import * as React from 'react';
import './index.css'
import { translate } from '../../../../i18n/index';
import ItemSlide from './ItemSlide';
import { Slide } from 'react-slideshow-image';
import slideList, { TestimonialsDTO } from './TestimonialsData';



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    canSwipe: true,
    autoplay: false,
    prevArrow: <div className="prevArrow"><i className="fas fa-chevron-left "></i></div>,
    nextArrow: <div className="nextArrow"><i className="fa fa-chevron-right "></i></div>,

};

export interface TestimonialsProps {
}

export default function Testimonials(props: TestimonialsProps) {
    return (
        <div className="testimonials">
            <h3 className="testimonials__title">{translate('Testimonials')}</h3>
            <div className="testimonials__slide">
                <Slide  {...properties}>
                    {slideList.map((item: TestimonialsDTO, index: number) => {
                        return (<div key={index} className="itemSlide">
                            <div className="itemSlide__title">{item.title}</div>
                            <img className="itemSlide__avatar" src={item.avatarURL} />
                            <div className="itemSlide__name">{item.name}</div>
                            <div className="itemSlide__position">{item.position}</div>
                        </div>)
                    })}

                </Slide>
                {/* <ItemSlide /> */}
            </div>

        </div>
    );
}
