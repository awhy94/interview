const path = require('path');
const fs = require('fs');

const fsTestPath = path.resolve(__dirname, './fstest/pages');

const pages = [];
const list = fs.readdirSync(fsTestPath);

list.forEach(item => {
  const stat = fs.statSync(path.join(fsTestPath, item));
})