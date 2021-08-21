import * as React from 'react';
import './index.css'
import { translate } from '../../i18n/index';
export interface FooterProps {
}

export default function Footer(props: FooterProps) {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4 m-6 c-12 footer__about-us">
                        <div className="footer__title">{translate('About Us').toUpperCase()}</div>
                        <div className="footer__des marginTop25">{translate('Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem')}</div>
                        <div className="footer__social">
                            <div className="social-parent">
                                <i className="fab fa-facebook-square  social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-twitter-square  social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-instagram-square social fa-2x"></i>
                            </div>
                            <div className="social-parent">
                                <i className="fab fa-google-plus-square social fa-2x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12 footer__recent-post">
                        <div className="footer__title">{translate('Recent post')}</div>
                        <ul className="list-account marginTop25">
                            <li className="list-account__item"><a href="#">{translate('Motion animation and VR headset')}</a></li>
                            <li className="list-account__item"><a href="#">{translate('Awesome tip to become CEO of big network startup')}</a></li>
                            <li className="list-account__item"><a href="#">{translate('Top 5 amazing changing for the social media industry')}</a></li>

                        </ul>
                    </div>
                    <div className=" col l-4 m-6 c-12 footer__contact-us">
                        <div className="footer__title">{translate('Contact us')}</div>

                        <div className="footer__contact-us__item marginTop25">
                            <i className="fas fa-map-marker-alt footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">Trụ Sở : Tầng 1 - 85A Trương Văn Thành, phường Hiệp Phú , Tp. Thủ Đức, Tp. HCM</div>
                        </div>
                        <div className="footer__contact-us__item marginTop8">
                            <i className="fas fa-phone-alt footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">0925688668</div>
                        </div>

                        <div className="footer__contact-us__item marginTop8">
                            <i className="fas fa-envelope footer__contact-us__item-icon"></i>
                            <div className=" footer__contact-us__item-text">info@irics.vn</div>
                        </div>



                    </div>

                </div>
            </div>

        </div>

    );
}
