import React, { useEffect, useRef, useState } from 'react';
import { translate } from '../../../../../i18n';
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, MenuItem, MenuList } from '@material-ui/core';
import VerticalMenu from '../menu/VerticalMenu';
import { MENU_COURSES, MENU_HOME, MENU_PARENT } from '../../valueMenu';
import VerticalMenuTowLevel from '../menu/VerticalMenuTwoLevel';


export interface NavBarProps {
}

export default function NavBar(props: NavBarProps) {

    const [showMenu, setShowMenu] = useState(false)
    const ref = useRef<HTMLElement>();
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        const clickOutSide = (e: MouseEvent) => {

            if (showMenu && ref.current && !(ref.current?.contains(e.target as Node) || false)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", clickOutSide)

        return () => {
            document.removeEventListener("mousedown", clickOutSide)
        }
    }, [showMenu])

    console.log('ref', ref);

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
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor">{translate("Home").toUpperCase()}
                                    <VerticalMenu listMenu={MENU_HOME} hasDivider={true} />
                                </li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor">{translate("Courses").toUpperCase()}
                                    <VerticalMenu listMenu={MENU_COURSES} hasDivider={true} />
                                </li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor">{translate("blog").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor">{translate("About us").toUpperCase()}</li>
                                <li className="menu-item showInPC hideInMobile hideInTablet showMenu hoverPrimaryColor">{translate("contact").toUpperCase()}</li>
                                <li className=" hideInPC showInMobile showInTablet showMenu " onClick={() => { handleMenu() }}>
                                    <div className="menu-group hoverPrimaryColor" >
                                        <li className="menu-item-menu">{translate("Menu").toUpperCase()}</li>
                                        <i className="fas fa-bars"></i>
                                        <VerticalMenuTowLevel listMenu={MENU_PARENT} show={showMenu} inerRef={ref} />
                                    </div>
                                </li>
                                <li className="apply-item background-radius_primary">{translate("Apply Now")}</li>

                                <li className="search-item circle-white-trans hoverPrimaryColor">
                                    <i className="fas fa-search white   center-flex"></i>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );

}
