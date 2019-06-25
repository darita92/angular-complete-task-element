const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const javascriptFiles = [
    './dist/completeTask/runtime.js',
    './dist/completeTask/polyfills.js',
    './dist/completeTask/main.js'
  ]

  const cssFiles = [
    './dist/completeTask/styles.css',
  ]

  await fs.ensureDir('elements')

  await concat(javascriptFiles, 'elements/completeTask.js')
  await concat(cssFiles, 'elements/completeTask.css')

  console.info('Angular Elements created successfully!')
})()