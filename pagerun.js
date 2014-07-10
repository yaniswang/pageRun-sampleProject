var pagerun = require('pagerun');

// set for debug
// pagerun.modulesRoot = '../';
pagerun.mode = 'test';

// pagerun.loadNpmPlugin('httpresponse');
pagerun.loadNpmPlugin('httperror');
pagerun.loadNpmPlugin('htmlhint');
pagerun.loadNpmPlugin('jserror');
pagerun.loadNpmPlugin('domtime');
pagerun.loadNpmPlugin('jsunit');
// pagerun.loadNpmPlugin('jscoverage');

process.on('message', function(config) {

    pagerun.setConfig(config);

    pagerun.run(function(runState, arrResults, arrLogs){
        process.send({
            runState:runState,
            arrResults:arrResults,
            arrLogs: arrLogs
        });
        process.exit(0);
    });

});