var pagerun = require('pagerun');

// pagerun.loadNpmPlugin('httpresponse');
pagerun.loadNpmPlugin('httperror');
pagerun.loadNpmPlugin('jserror');
pagerun.loadNpmPlugin('domtime');
pagerun.loadNpmPlugin('jsunit');
// pagerun.loadNpmPlugin('jscoverage');
pagerun.loadNpmPlugin('htmlhint');

pagerun.mode = 'test';

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