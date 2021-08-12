import { Divider } from '@material-ui/core';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { KeyValueMultiLevelDTO } from '../../../../../models/base/KeyValueDTO';
import '../nav/index.css';
import { handleExpandCollapse, verticalMenuSelector } from './VerticalMenuSlice';

export interface VerticalMenuTowLevelProps {
    listMenu?: KeyValueMultiLevelDTO[]
    hasDivider?: boolean,
    show?: boolean,
    inerRef?: any
}

export default function VerticalMenuTowLevel({ listMenu, hasDivider, show, inerRef }: VerticalMenuTowLevelProps) {

    var showing = show == true ? 'showInMobile showInTablet' : 'hideInTablet hideInMobile';

    var useDisPatch = useAppDispatch();
    var { listExpand } = useAppSelector(verticalMenuSelector)

    const HandleClickExpand = (index: number) => {
        useDisPatch(handleExpandCollapse(index))
    }

    const IsExpand = (index: number): boolean => {
        return listExpand?.indexOf(index) !== -1;
    }

    return (

        <div className={`vertical-menu-multilevel animation-fadein-0-3 ${showing}`} ref={inerRef}>
            {
                listMenu?.map((item, index) => {
                    return (
                        <div>
                            <div className="vertical-menu-item " key={item.key}>
                                {item.value}
                                {item.child && <i className={`fa fa-${IsExpand(index) == true ? 'minus' : 'plus'}`} onClick={(e) => {
                                    HandleClickExpand(index);
                                    e.stopPropagation();
                                }}></i>}
                            </div>
                            {

                                (IsExpand(index) && <div>
                                    {item.child?.map((item, index) => {
                                        return <div className="vertical-menu-item menu-item-child" key={index}>
                                            {item.value}
                                        </div>
                                    })}
                                </div>
                                )
                            }

                            {hasDivider && <Divider className="divider" />}
                        </div>
                    );
                })
            }
        </div>
    );
}
