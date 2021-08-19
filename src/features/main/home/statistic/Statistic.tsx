import * as React from 'react';
import { translate } from '../../../../i18n/index';
import './index.css'
export interface StatisticProps {
}

export default function Statistic(props: StatisticProps) {
    return (
        <div className="statistic">
            <div className="grid wide">
                <div className="row statistic__row">
                    <div className="col l-3 m-12 c-12 statistic__item">
                        <div className="statistic__item-number statistic__item-number1"></div>
                        <div className="statistic__item-des">{translate('OF CLASS OF 2018').toUpperCase()}</div>
                    </div>
                    <div className="col l-3 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number statistic__item-number2"></div>
                        <div className="statistic__item-des">{translate('PEOPLE WORKING').toUpperCase()}</div>
                    </div>
                    <div className="col l-3 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number statistic__item-number3"></div>
                        <div className="statistic__item-des">{translate('YEARS OF EXPERIENCEN').toUpperCase()}</div>
                    </div>
                    <div className="col l-3 m-12 c-12 statistic__item marginTop-item">
                        <div className="statistic__item-number statistic__item-number4"></div>
                        <div className="statistic__item-des">{translate('STUDENTS').toUpperCase()}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
