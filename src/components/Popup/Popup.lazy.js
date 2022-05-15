import React, { lazy, Suspense } from 'react';

const LazyPopup = lazy(() => import('./Popup'));

const Popup = props => (
  <Suspense fallback={null}>
    <LazyPopup {...props} />
  </Suspense>
);

export default Popup;
