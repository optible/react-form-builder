const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: path.resolve('./dist'),
    filename: 'app.js',
    library: 'ReactFormBuilder',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    bootstrap: 'bootstrap',
  },

  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.scss', '.css', '.json'],
    alias: {
      jquery: path.join(__dirname, './jquery-stub.js'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-json-strings',
              '@babel/plugin-syntax-dynamic-import',
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules'],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
            },
          },
        ],
      },
    ],
  },

  performance: {
    hints: false,
  },
};
