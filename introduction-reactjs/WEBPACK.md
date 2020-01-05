In **webpack** develops the files that will be sent to production

### Create a archive `webpack.config.js`

// Import folder/directory control
const path = require ('path');

// Export content
module.exports = {

   // Where webpack fetched packages
   entry: './src/index.js',

   // Where the packages will be created, exported and named
   output: {
      path: path.resolve (__dirname, 'dist'),
      filename: 'bundle.js'
   }
};

**Note -> Configurating Basic**

### Create archive `.babelrc`
{
   "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
   ]
}

### Use the tags into terminal

npm i -D webpack webpack-cli

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

### In `package.json`
**"scripts": {"build": "webpack --mode production"**}
// Create version in production
npm run build

### In `package.json`
**"scripts": {"dev": "webpack --mode development"**}
// Create version in development
npm run dev

### In `package.json`
**"scripts": {"start:dev": "webpack-dev-server}**
// Create a localhost for submit aplication
npm i -D webpack-dev-server

### For identified index.html
npm i --save-dev html-webpack-plugin
