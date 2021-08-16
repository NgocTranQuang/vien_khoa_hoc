import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import NavBar from '../../base/components/nav/baseNavBar';
import { homeHeaderActions, homeHeaderSelectors } from './homeHeaderSlice';
import './index.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { translate } from '../../../../i18n/index';
import { url } from 'inspector';
export interface HeaderHomeProps {
    listImage: string[]
}

export default function HeaderHome({ listImage }: HeaderHomeProps) {

    const img1 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02.jpg"
    const anhNho1 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider02-80x50.jpg"

    const img2 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01.jpg"
    const anhNho2 = "http://gonthemes.info/eschool/wp-content/uploads/2018/11/slider01-80x50.jpg";

    const currentPosition = useAppSelector(homeHeaderSelectors).currentImage;
    const headerDispatch = useAppDispatch();

    // useEffect(() => {
    //     var timeInterval = setInterval(() => {
    //         headerDispatch(homeHeaderActions.nextImage(currentPosition))
    //     }, 10000)
    //     return () => {
    //         clearInterval(timeInterval)
    //     }
    // }, [currentPosition])


    return (

        <div className="header-home">
            <div className="header-home__content" >

                <div className="slide-container z-index1 margrinInTabletMobile">
                    <div className="hideInPC hideInMobile showInTablet">
                        <NavBar />
                    </div>
                    <Fade duration={10000} loop={true} transitionDuration={2000} arrows={false}>
                        <div className="each-fade sizeSlide">
                            <div className="image-container sizeSlide ">
                                <img className="zoomIn sizeSlide" src={listImage[0]} />
                            </div>
                            <h2>First Slide</h2>
                        </div>
                        <div className="each-fade sizeSlide">
                            <div className="image-container sizeSlide">
                                <img className="zoomOut sizeSlide" src={listImage[1]} />
                            </div>
                            <h2>Second Slide</h2>
                        </div>
                    </Fade>
                </div>
                <div className="opaticy0-65 z-index2">
                    <NavBar />
                    <div className="header-hom__content__slide">
                        <div className="arrow hideInMobile">
                            <i className="fas fa-chevron-left center-flex"></i>
                            <div className="page-imagine" style={{ backgroundImage: `url(${anhNho1})` }}>
                                <div className=" matchParent page-imagine page-imagine-left  ">
                                    <div className="page-image__content page-image__content-left matchParent ">
                                        <div className="arrow page-image__conten-arrow">
                                            <i className="fas fa-chevron-left center-flex"></i>
                                        </div>
                                        <div className="page-image__conten-text page-image__conten-text-left">S L I D E</div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="header-content__text">
                            <div className="header-content__text_title">{translate('How do i get to the university?')}</div>
                            <div className="header-content-des">
                                <div className="header-content__text_des">{translate('Welcom to Eschool')}</div>
                                <div className="header-content__text_des" >{translate('Best learning institutions')}</div>
                            </div>
                            <div className="header-content__text_button background-radius_primary ">{translate('Visit campus').toUpperCase()}</div>
                        </div>
                        <div className="arrow hideInMobile">
                            <i className="fas fa-chevron-right center-flex"></i>

                            <div className="page-imagine page-imagine-right" style={{ backgroundImage: `url(${anhNho1})` }}>
                                <div className=" matchParent page-imagine page-imagine-right">
                                    <div className="page-image__content matchParent ">
                                        <div className="arrow page-image__conten-arrow">
                                            <i className="fas fa-chevron-right center-flex"></i>
                                        </div>
                                        <div className="page-image__conten-text">S L I D E</div>

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