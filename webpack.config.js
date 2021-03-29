module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        options: {
          search: '_replace_me_',
          replace: (match, p1, offset, string) => {
              console.log('REPLACE RUNNING!!', match);
              return 'Replace is working :-)';
          },
          flags: 'ig'
        }
      }
    ]
  }
}