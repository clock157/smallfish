export default {
  routes: [
    {
      path: '/',
      component: 'IndexPage',
    },
    {
      path: '/2',
      component: 'SubPage',
    },
  ],
  script: ['https://gw.alipayobjects.com/os/lib/moment/2.24.0/moment.js'],
  style: [
    'https://gw.alipayobjects.com/a/g/lark/lark-katex/0.8.1/katex.min.css',
    `
      body: {
        background: #fffff1;
      }
    `,
  ],
  dva: true,
  antdpro: true,
  styled: true,
  i18n: {
    lng: 'en',
  },
};
