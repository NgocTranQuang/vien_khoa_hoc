import * as React from 'react';
import { translate } from '../../../../i18n';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


export interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {
    return (
        <div className="navbar">
            <div className="grid wide ">
                <div className="row navbar__content">
                    <div className="col l-3 navbar__left">
                        <img className="navbar__image-home" src="http://gonthemes.info/eschool/wp-content/themes/eschool/images/logo-white.png"></img>
                    </div>
                    <div className="col l-9">
                        <div className="navbar__right">
                            <div className="row">
                                <div className=" col l-9 c-0 navbar__right__menu">
                                    <div className="row navbar__right__menu-item">
                                        <div className="col menu-item text-end">
                                            <h3 className="navbar__title">{translate("HOME")}</h3>
                                        </div>
                                        <div className="col menu-item text-end">
                                            <h3 className="navbar__title">{translate("COURSE")}</h3>
                                        </div>
                                        <div className="col menu-item text-end">
                                            <h3 className="navbar__title">{translate("BLOG")}</h3>
                                        </div>
                                        <div className="col menu-item text-end">
                                            <h3 className="navbar__title">{translate("ABOUT US").toUpperCase()}</h3>
                                        </div>
                                        <div className="col menu-item text-end">
                                            <h3 className="navbar__title">{translate("CONTACTS")}</h3>
                                        </div>
                                    </div>

                                </div>
                                <div className="col">
                                    <div className="row navbar__right__action">
                                        <div className="col gravity-end">
                                            <h3 className="navbar__title-apply background-radius_primary">Apply Now</h3>
                                        </div>
                                        <div className="col flex">
                                            <div className="circle-white-trans center-flex">
                                                <i className="fas fa-search white center-flex"></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
