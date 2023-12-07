export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';

const page = () => import('../../chunks/pages/PostsLayout_20ed6e85.mjs').then(n => n.P);

export { page };
