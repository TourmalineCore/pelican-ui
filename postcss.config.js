module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    process.env.NODE_ENV === 'production'
      ? [
          'autoprefixer',
          {
            overrideBrowserslist: [
              'last 2 versions',
              'Firefox >= 60',
              'Chrome >= 67',
              'Safari >= 11',
              'iOS >= 11.3',
              'Android >= 67',
            ],
            flexbox: 'no-2009',
            mask: true,
          },
        ]
      : null,
  ].filter(Boolean),
};