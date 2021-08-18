import * as React from 'react';
import { translate } from '../../../../i18n/index';

import './index.css'

export interface BellowHeaderProps {
}

export default function BellowHeader(props: BellowHeaderProps) {
    return (
        <div className="bellowHeader">
            <div className="grid wide ">
                <div className="row bellowHeader-row">
                    <div className="col  l-4 m-12 c-12 bellowheader-item">
                        <div className="image-item">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-01.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Programs').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Offering over 400 programs taught by the best professors globally.')}</div>
                        </div>
                    </div>
                    <div className="col  l-4 m-12 c-12 bellowheader-item bellowheader-margin-top">
                        <div className="image-item image-item-margin-top">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-02.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Certificate').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Certifications that will connect you to internship and job opportunities.')}</div>
                        </div>
                    </div>
                    <div className="col l-4 m-12 c-12 bellowheader-item bellowheader-margin-top">
                        <div className="image-item image-item-margin-top">
                            <img src="http://gonthemes.info/eschool/wp-content/uploads/2018/11/icon-box-03.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="content-title">
                                {translate('Affordablity').toUpperCase()}
                            </div>
                            <div className="content-des">{translate('Meet with a career coach to assess your skills and career interests.')}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
