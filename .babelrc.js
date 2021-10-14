module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: 2,
          proposals: true
        }
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    // 'transform-decorators-legacy',
    // 'transform-class-properties',
    // [('transform-runtime', { polyfill: false })]

    // '@babel/proposal-object-rest-spread',
    // '@babel/proposal-class-properties',
    'transform-vue-jsx',
    // '@babel/plugin-transform-runtime'
  ]
};
