import * as React from 'react';
import OtherHomeHeader from '../other/otherHomeHeader/OtherHomeHeader';
import { translate } from '../../../i18n/index';

export interface BlogPageProps {
}

export default function BlogPage(props: BlogPageProps) {
    return (
        <div>
            <OtherHomeHeader title={translate('Coming soon')} />
        </div>
    );
}
