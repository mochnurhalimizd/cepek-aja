import React, { lazy, Suspense } from 'react';

const Text = lazy(() => import('@/component/atomic/text/text.component'));

class BannerComponent extends React.Component {
    render() {
        return (
            <Suspense fallback={<div> Loading......</div>}>
                <Text type="h1" tag="h1" fontWeight="bold">
                    Buy & Sell
                </Text>

                <Text type="h2" tag="h2">
                    secondhand
                </Text>
                <Text>Sell thing you don't use and find great deals</Text>
            </Suspense>
        );
    }
}

export default BannerComponent;
