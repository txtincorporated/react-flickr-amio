module.exports = {
  plugins: [
    ['@babel/plugin-transform-modules-commonjs', { allowTopLevelThis: true }],
    '@babel/plugin-transform-strict-mode',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-class-properties',
  ],
  presets: [
    
    '@babel/preset-react',
    '@babel/preset-flow',
    [  
      '@babel/preset-env',
      {
        shippedProposals: true,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};