import { Divider } from '@material-ui/core';
import * as React from 'react';
import { KeyValueDTO } from '../../../../../models/base/KeyValueDTO';

export interface VerticalMenuProps {
    listMenu?: KeyValueDTO[],
    hasDivider?: boolean,
}

export default function VerticalMenu({ listMenu, hasDivider }: VerticalMenuProps) {
    return (
        <div className={`vertical-menu animation-fadein-0-3`}>
            {
                listMenu?.map((item, index) => {
                    return (
                        <div>
                            <div className="vertical-menu-item " key={index}>
                                {item.value}
                            </div>
                            {hasDivider && <Divider className="divider" />}
                        </div>
                    );
                })
            }
        </div>
    );
}
