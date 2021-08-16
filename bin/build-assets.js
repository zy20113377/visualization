const fs = require('fs');
const render = require('json-templater/string');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const endOfLine = require('os').EOL;

const ASSETS_PATH = path.join(__dirname, '../src/assets');

const filterComponent = p => /\.[jpeg|jpg|png|svg|webp|bmp|gif]/.test(p);

const ComponentNames = fs.readdirSync(path.join(ASSETS_PATH)).filter(filterComponent);

const COMMENT = `// 这个文件是自动生成的,不要手动修改,查看 package.json -> build:assets
// 仅支持assets目录下的文件,不支持文件夹`;

const OUTPUT_PATH = path.join(ASSETS_PATH, 'index.ts');
const IMPORT_TEMPLATE = 'export \{ default as {{name}} \} from \'./{{package}}\';';

const includeComponentTemplate = [];

ComponentNames.forEach(package => {
  const name = package.replace(/\..*$/, '').replace(/\./, '-') + 'Asset';
  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: uppercamelcase(name),
    package
  }));
});

fs.writeFileSync(OUTPUT_PATH, COMMENT + endOfLine + includeComponentTemplate.join(endOfLine));
