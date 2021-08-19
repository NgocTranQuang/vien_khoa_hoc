import * as React from 'react';
import BellowHeader from './bellowheader/BellowHeader';
import Courses from './courses/Courses';
import HeaderHome from './header/HeaderHome';
import Introduction from './introduction/Introduction';
import Newsletter from './newsletter/Newsletter';
import Statistic from './statistic/Statistic';
import Testimonials from './testimonials/Testimonials';

export interface Homerops {
}

export default function Home(props: Homerops) {
    const LIST_IMAGE = ["http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg", "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"]

    return (
        <div>
            <HeaderHome listImage={LIST_IMAGE} />
            <BellowHeader />
            <Introduction />
            <Statistic />
            <Courses />
            <Newsletter />
            <Testimonials />

        </div>
    );
}
