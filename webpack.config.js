const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

// função que pega todos os htmls dentro de src
function getHtmlFiles(dir, base = '') {
  let results = [];

  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(base, file);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath, relativePath));
    } else if (file.endsWith('.html') && file !== 'index.html') {
      results.push(relativePath);
    }
  });

  return results;
}

const htmlFiles = getHtmlFiles(path.resolve(__dirname, 'src'));

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },

  plugins: [
    // copia todos os arquivos, exceto index.html para evitar conflito
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src',
          to: '',
          globOptions: {
            ignore: ['**/index.html']  // <-- ignora index.html original
          }
        }
      ]
    }),

    // injeta o CSS global em todos os HTMLs copiados
    new HtmlWebpackTagsPlugin({
      tags: ['styles/global.css'],
      append: false,
      publicPath: ''
    }),

    // gera o index.html automático com links para todos os outros htmls
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <head>
            <link rel="stylesheet" href="styles/global.css">
            <title>Atividades</title>
          </head>
          <body>
            <h1>Lista de Atividades</h1>
            <ul>
              ${htmlFiles.map(file => 
                `<li><a href="${file}">${file}</a></li>`
              ).join('')}
            </ul>
          </body>
        </html>
      `
    })
  ]
};