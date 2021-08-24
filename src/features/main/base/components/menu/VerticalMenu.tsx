import { Divider } from '@material-ui/core';
import * as React from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { KeyValueDTO } from '../../../../../models/base/KeyValueDTO';
import { verticalMenuActions } from './VerticalMenuSlice';

export interface VerticalMenuProps {
    listMenu?: KeyValueDTO[],
    hasDivider?: boolean,
}

export default function VerticalMenu({ listMenu, hasDivider }: VerticalMenuProps) {
    var useDisPatch = useAppDispatch();
    const HandleClick = (key: string) => {
        console.log("click luon cho máu ", key, Date.now());

        useDisPatch(verticalMenuActions.onClickMenu({ key, time: Date.now() }))
    };

    return (
        <div className={`vertical-menu animation-fadein-0-3`}>
            {
                listMenu?.map((item, index) => {
                    return (
                        <div>
                            <div className="vertical-menu-item " key={index} onClick={() => { HandleClick(item.key || "") }}>
                                {item.value}
                            </div>
                            {hasDivider && <Divider className="divider" />}
                        </div>
                    );
                })
            }
        </div >
    );
}
