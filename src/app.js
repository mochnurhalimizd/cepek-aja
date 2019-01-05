import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const Banner = lazy(() => import('./component/molecul/banner/banner.component'));

render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Banner />
        </Suspense>
    </div>,
    document.getElementById('app')
);
