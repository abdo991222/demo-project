
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/project-angular1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/project-angular1/home",
    "route": "/project-angular1"
  },
  {
    "renderMode": 2,
    "route": "/project-angular1/home"
  },
  {
    "renderMode": 2,
    "route": "/project-angular1/about"
  },
  {
    "renderMode": 2,
    "route": "/project-angular1/contact"
  },
  {
    "renderMode": 2,
    "route": "/project-angular1/protfolio"
  },
  {
    "renderMode": 2,
    "route": "/project-angular1/**"
  }
],
  assets: {
    'index.csr.html': {size: 5969, hash: '1bd8d1a848c17efa9e2ccf67a82086367a7f7f890f3c6e81104ef3dd76117304', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1116, hash: '2ef9a429885977230fe62e999cb108c39544304ca92f9c9b0cfea2053a5eb36b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 20673, hash: 'ee6d5e3b5666466a123cde821cc9c55e542ea7bfe019d452131151af2ab2ffd2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20409, hash: '1f0494dc3d0ee9f0ef5b1313eef1d23c8dda90e200829b6ec6152f0eedb50b84', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25601, hash: '3f077ca10cfee50a776ed156b16ce099a2ce5b7d0201a36f117abc77aee5998c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'protfolio/index.html': {size: 27334, hash: '48ed73d673c3470f3c8448417da0e8fda2e74e413275884b5c660c030c0b4d64', text: () => import('./assets-chunks/protfolio_index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
