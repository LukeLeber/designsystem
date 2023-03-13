const fs = require('fs');
const sass = require('sass');

const components = fs.readdirSync('packages').filter(function(file) {
  return file !== 'patternlab';
});

components.forEach(component => {
  const result = sass.compile('packages/' + component + '/src/styles.scss', {
    sourceMap: false,
    style: 'compressed',
  });
  fs.mkdirSync('packages/' + component + '/dist', {
    recursive: true,
  });
  fs.writeFileSync('packages/' + component + '/dist/style.css', result.css);
});
