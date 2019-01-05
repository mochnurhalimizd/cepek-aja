import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './style.scss';

const Banner = lazy(() => import('./component/molecul/banner/banner.component'));
const TopCta = lazy(() => import('./component/molecul/topCta/topcta.component'));
const Image = lazy(() => import('./component/atomic/image/image.component'));
render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <TopCta />
            <Banner />
            <Image />
        </Suspense>
    </div>,
    document.getElementById('app')
);
