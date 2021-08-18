import * as React from 'react';
import { translate } from '../../../../i18n/index';
import './index.css'

export interface IntroductionProps {
}

export default function Introduction(props: IntroductionProps) {
    return (
        <div className="introduction">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-12 c -12 introduction__text">
                        <div className="introduction__title">
                            {translate('Eschool University')}
                        </div>
                        <div className="introduction__des">
                            <p className="margin-text">
                                {translate('For 23 years of existence, Ed Foundation has implemented more than 1.700 activities, the total value about 10 milion euros.')}
                            </p>
                            <p></p>
                            <p className="margin-text">
                                {translate('We are home to 1,500 students (aged 12 to 16) and 100 expert faculty and staff a community representing over 40 different nations. We are proud of our international and multi-cultural ethos,and the way our community.')}
                            </p>
                        </div>
                        <div className="introduction__signature">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/sign.png" alt="" />
                        </div>

                    </div>
                    <div className="col l-6 m-12 c -12 ">
                        <img className="introduction__image" src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/about-us.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
