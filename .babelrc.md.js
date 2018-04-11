({
  "presets": [
    [
      "env", // 声明环境
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 7"] //指定支持主流浏览器最新的两个版本以及IE 7+
        },
        "targets": {
          "browsers": "> 5%" // 支持超过市场份额5%的浏览器
        },
        "targets": {
          "chrome": 56 // 某个固定版本的浏览器
        }
      }
    ],
    "react",
    "es2015",
    "stage-1"
  ],
  "plugins": [
    "transform-runtime",
    "transform-es2015-classes"
  ]
})