var task = require('child_process').fork('pagerun.js');

task.on('message', function(msg) {
    console.log(msg.runState);
    console.log(JSON.stringify(msg.arrResults,null,4));
    // console.log(msg.arrLogs);
});

task.send({
        pageproxy: {
            gunzip: true,
            keyPath: "./cert/"
        },
        webdriver: {
            browserName: 'chrome',
            browserVersion: '',
            url: 'http://www.baidu.com/',
            loginUrl: '',
            loginPreClick: '',
            loginParams: {
                'username': 'xxx',
                'password': 'xxx'
            },
            loginButton: 'signInButton',
            scrollToEnd: true,
            screenshot: false
        },
        hosts: 'www.alibaba.com www.baidu.com',
        htmlhint: {
            "doctype-first": true,
            "spec-char-escape": true,
            "tag-pair": true,
            "id-unique": true,
            "src-not-empty": true,
        }
    });