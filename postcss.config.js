module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      minPixelValue: 2, // 设置要替换的最小像素值
    },
  },
};
