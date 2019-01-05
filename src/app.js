import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

const Button = lazy(() => import('./component/button'));
const Text = lazy(() => import('./component/atomic/text/text.component'));

render(
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <h1>Datas</h1>
            <Button />
            <Text type="h1">Ini Text</Text>
        </Suspense>
    </div>,
    document.getElementById('app')
);
