module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        baseUrl: './',
        alias: {
          '@src/*': ['src/*'],
        },
      },
    ],
  ],
};
