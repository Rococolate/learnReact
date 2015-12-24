module.exports = {
  entry:[ // 入口
    './js/entry.jsx'
  ],
  output: { // 输出
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }, 
  module: {
    loaders: [ // 预处理
      {
        test: /\.jsx?$/, // 预处理jsx 
        exclude: /(node_modules)/,
        loader: 'babel?presets[]=react,presets[]=es2015' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};


