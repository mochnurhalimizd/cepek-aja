import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const Button = lazy(() => import('./component/button'));

render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <h1>Datas</h1>
            <Button />
        </Suspense>
    </div>,
    document.getElementById('app')
);
