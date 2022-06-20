const plugins = [
  [
      'import',
      {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true,
      },
      'vant',
  ],
  // [
  //   // 配置按需引入插件babel-plugin-component
  //   "component",
  //   {
  //     "libraryName": "uniondrug-ui",
  //     "libDir": "lib/",
  //   }
  // ]
];
module.exports = {
  // presets: ['@vue/cli-plugin-babel/preset'],
  presets: ['@vue/app'],
  plugins,
};