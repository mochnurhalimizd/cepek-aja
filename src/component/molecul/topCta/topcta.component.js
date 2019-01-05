import React, { lazy, Suspense } from 'react';
import './topcta.scss';

const Text = lazy(() => import('@/component/atomic/text/text.component'));
const Buttons = lazy(() => import('@/component/atomic/buttons/buttons.component'));

class TopCtaComponent extends React.Component {
    render() {
        return (
            <div className="topcta">
                <Suspense fallback={<div> Loading......</div>}>
                    <Text>
                        Performers, bands, speakers, party pros: Want more gigs?
                        <Buttons href="http://www.cepekaja.com" type="solid" className="ml-1">
                            Jual Barang
                        </Buttons>
                        <Buttons type="solid">Solid</Buttons>
                        <Buttons type="outline">Outline</Buttons>
                        <Buttons type="ghost">Ghost</Buttons>
                    </Text>
                </Suspense>
            </div>
        );
    }
}

export default TopCtaComponent;
