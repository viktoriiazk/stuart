import React, { lazy, Suspense } from 'react';

const LazyBlog-post-preview = lazy(() => import('./Blog-post-preview'));

const Blog-post-preview = props => (
  <Suspense fallback={null}>
    <LazyBlog-post-preview {...props} />
  </Suspense>
);

export default Blog-post-preview;
