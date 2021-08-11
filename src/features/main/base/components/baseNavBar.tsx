import * as React from 'react';
import { translate } from '../../../../i18n';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


export interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {

    return (
        <div className="nav-bar">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 m-3 c-12 display-flex">
                        <div className="nav-bar-item-image">
                            <img className="navbar__image-home" src="http://gonthemes.info/eschool/wp-content/themes/eschool/images/logo-white.png"></img>
                        </div>
                    </div>
                    <div className="col l-9 m-9 c-12">
                        <div className="nav-bar__menu_right">
                            <ul >
                                <li className="menu-item showInPC hideInMobile hideInTablet">{translate("Home").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet ">{translate("about us").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet ">{translate("blog").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet ">{translate("Course").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet ">{translate("contacts").toUpperCase()}</li>
                                <li className=" hideInPC showInMobile showInTablet">
                                    <div className="menu-group">
                                        <li className="menu-item-menu">{translate("Menu").toUpperCase()}</li>
                                        <i className="fas fa-bars"></i>
                                    </div>
                                </li>
                                <li className="apply-item background-radius_primary">{translate("Apply Now")}</li>

                                <li className="search-item circle-white-trans">
                                    <i className="fas fa-search white   center-flex"></i>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

    // return (
    //     <div className="grid wide">
    //         <div className="row nav-bar">
    //             <div className="col l-13 m-4 c-12">
    //                 <div className="nav-bar-item-image">
    //                     <img className="navbar__image-home" src="http://gonthemes.info/eschool/wp-content/themes/eschool/images/logo-white.png"></img>
    //                 </div>
    //             </div>
    //             <div className="col l-9 m-8 c-0">
    //                 <div className="row nav-bar__right">
    //                     <ul className="col l-9 m-0 c-0 ">
    //                         <div className="nav-bar__menu">
    //                             <li className="menu-item">{translate("Home").toUpperCase()}</li>
    //                             <li className="menu-item">{translate("about us").toUpperCase()}</li>
    //                             <li className="menu-item">{translate("blog").toUpperCase()}</li>
    //                             <li className="menu-item">{translate("Course").toUpperCase()}</li>
    //                             <li className="menu-item">{translate("contacts").toUpperCase()}</li>
    //                         </div>
    //                     </ul>

    //                     <div className="col l-2 m-4 c-6">
    //                         <div className="navbar__title-apply background-radius_primary">Apply Now</div>
    //                     </div>
    //                     <div className="col l-1 m-0 c-0 ">
    //                         <div className=" row na-bar__search-group">
    //                             <div className="nav-bar__search 
    //                                         circle-white-trans">

    //                                 <i className="fas fa-search white center-flex"></i>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //             </div>

    //         </div>
    //     </div>
    // );



    // return (
    //     <div className="navbar">
    //         <div className="grid wide ">
    //             <div className="row navbar__content">
    //                 <div className="col l-3 navbar__left">
    //                     <img className="navbar__image-home" src="http://gonthemes.info/eschool/wp-content/themes/eschool/images/logo-white.png"></img>
    //                 </div>
    //                 <div className="col l-9">
    //                     <div className="navbar__right">
    //                         <div className="row navbar__right">
    //                             <div className=" col l-9 c-0 navbar__right__menu">
    //                                 <div className="row navbar__right__menu-item">
    //                                     <div className="col menu-item text-end">
    //                                         <h3 className="navbar__title">{translate("HOME")}</h3>
    //                                     </div>
    //                                     <div className="col menu-item text-end">
    //                                         <h3 className="navbar__title">{translate("COURSE")}</h3>
    //                                     </div>
    //                                     <div className="col menu-item text-end">
    //                                         <h3 className="navbar__title">{translate("BLOG")}</h3>
    //                                     </div>
    //                                     <div className="col menu-item text-end">
    //                                         <h3 className="navbar__title">{translate("ABOUT US").toUpperCase()}</h3>
    //                                     </div>
    //                                     <div className="col menu-item text-end">
    //                                         <h3 className="navbar__title">{translate("CONTACTS")}</h3>
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                             <div className="col l-3">
    //                                 <div className="row navbar__right__action">
    //                                     <div className="col gravity-end flex-1">
    //                                         <h3 className="navbar__title-apply background-radius_primary">Apply Now</h3>
    //                                     </div>
    //                                     <div className="col display-flex">
    //                                         <div className="circle-white-trans center-flex">
    //                                             <i className="fas fa-search white center-flex"></i>
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}
