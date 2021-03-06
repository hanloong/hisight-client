/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

var app = new EmberApp({
  sassOptions: {
    includePaths: ['bower_components/materialize/sass', 'vendor/redactor'],
    extension: ['sass']
  }
});
app.import('vendor/redactor/redactor.min.js');

app.import('bower_components/materialize/bin/materialize.js');
app.import('bower_components/materialize/bin/materialize.js', {
  destDir: 'fonts'
});

var extraAssets = new Funnel('bower_components/materialize/font', {
    srcDir: '/',
    include: ['**/*.woff*'],
    destDir: '/font'
 });

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree(extraAssets);
