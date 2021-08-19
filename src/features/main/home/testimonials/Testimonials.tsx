import * as React from 'react';
import './index.css'
import { translate } from '../../../../i18n/index';



export interface TestimonialsProps {
}

export default function Testimonials(props: TestimonialsProps) {
    return (
        <div className="testimonials">
            <div className="testimonials__title">{translate('Testimonials')}</div>
            <div className="testimonials__slide"></div>

        </div>
    );
}
