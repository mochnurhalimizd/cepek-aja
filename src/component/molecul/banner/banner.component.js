import React, { lazy, Suspense } from 'react';
import './banner.scss';

const Text = lazy(() => import('@/component/atomic/text/text.component'));

class BannerComponent extends React.Component {
    render() {
        return (
            <div className="cp-banner">
                <Suspense fallback={<div> Loading......</div>}>
                    <div className="cp-banner__title">
                        <Text type="h1" tag="h1" fontWeight="bold">
                            Buy & Sell
                        </Text>

                        <Text type="h2" tag="h1">
                            secondhand
                        </Text>
                    </div>
                    <div className="cp-banner__description">
                        <Text type="h4" tag="p">
                            Sell thing you don't use and find great deals
                        </Text>
                    </div>
                </Suspense>
            </div>
        );
    }
}

export default BannerComponent;
