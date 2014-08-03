var pagerun = require('pagerun');

// set for debug
// pagerun.modulesRoot = '../';
pagerun.mode = 'test';

// pagerun.loadNpmPlugin('httpresponse');
pagerun.loadNpmPlugin('httpsummary');
pagerun.loadNpmPlugin('httperror');
pagerun.loadNpmPlugin('htmlhint');
pagerun.loadNpmPlugin('jserror');
pagerun.loadNpmPlugin('pagesummary');
pagerun.loadNpmPlugin('jsunit');
// pagerun.loadNpmPlugin('jscoverage');

process.on('message', function(config) {

    pagerun.setConfig(config);

    pagerun.run(function(result){
        process.send(result);
        process.exit(0);
    });

});