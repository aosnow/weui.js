module.exports = {
  presets: [
    ['@babel/env', { loose: true }]
  ],
  include: /(src|example|__tests__)/i,
  plugins: [
    ['@babel/transform-runtime', { corejs: 2 }],
    ['@babel/proposal-class-properties', { loose: true }]
  ]
};
