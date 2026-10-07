
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "preload": [
      "chunk-C4bMrgk8.js",
      "chunk-DxVT0GRL.js",
      "chunk-Zm4MBHrb.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BmVGKP_z.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-CRwWyaAO.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJVLAooD.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-CRwWyaAO.js",
      "chunk-DdAGNbwe.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-fPu-wGSf.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-CRwWyaAO.js"
    ],
    "route": "/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-B_7KhVSZ.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-DxVT0GRL.js",
      "chunk-DdAGNbwe.js",
      "chunk-f2EePFDp.js",
      "chunk-Zm4MBHrb.js"
    ],
    "route": "/blogs"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-CDh8sq4K.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-DxVT0GRL.js",
      "chunk-DdAGNbwe.js",
      "chunk-f2EePFDp.js",
      "chunk-Zm4MBHrb.js"
    ],
    "route": "/blogs/me"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DBu5xkg2.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-CRwWyaAO.js",
      "chunk-DxVT0GRL.js"
    ],
    "route": "/blogs/create"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DYFsKr_1.js",
      "chunk-DjDMqnwt.js",
      "chunk-DxVT0GRL.js"
    ],
    "route": "/blogs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GLPBVC7B.js",
      "chunk-DVNQb0YM.js",
      "chunk-DjDMqnwt.js",
      "chunk-CRwWyaAO.js",
      "chunk-DxVT0GRL.js"
    ],
    "route": "/blogs/*/edit"
  },
  {
    "renderMode": 2,
    "redirectTo": "/blogs",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28955, hash: '83a0d16c69f8a0fbed19c5978b3aecb19b1c7305096fd2accfc05aa0528e85bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17770, hash: 'af8525a2074d61be7ab2468631ac148c9d2fbb01c60b4f7136194ca8365f9d27', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'profile/index.html': {size: 303, hash: 'f10f9068747b205303bd2cdd6cf5a18fc1d902f77c3ff95f282ebc86e6f49442', text: () => import('./assets-chunks/profile_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 106789, hash: '1eadfb8504852b580c56e909b33e407ef4f27c445b741886dbe8add5f7ebc522', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 126041, hash: 'dabe2dada9ad25b568f0038a570277e337ba1ba38de1d30ad8de1cc18c2df61b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-6LOATMQE.css': {size: 23790, hash: 'JEXGPskAq8s', text: () => import('./assets-chunks/styles-6LOATMQE_css.mjs').then(m => m.default)}
  },
};
