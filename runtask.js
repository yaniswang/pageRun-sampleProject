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
            url: 'http://www.alibaba.com/',
            // loginUrl: 'https://login.alibaba.com/',
            loginPreClick: '',
            loginParams: {
                'xloginPassportId': 'xxx',
                'xloginPasswordId': 'xxx'
            },
            loginButton: 'signInButton',
            scrollToEnd: false,
            screenshot: false
        },
        bridge: {
            // delayDefaultEnd: 5000
        },
        // hosts: 'www.alibaba.com www.baidu.com',
        inject: {
            top: '<script>console.log("top")</script>',
            header: '<script>console.log("header")</script>',
            body: '<script>console.log("body")</script>',
            footer: '<script>console.log("foot")</script>'
        },
        htmlhint: {
            rules: {
                'doctype-first': true,
                'tag-pair': true,
                'spec-char-escape': true,
                'id-unique': true,
                'src-not-empty': true,
                'attr-no-duplication': true
            },
            once: true
        },
        jscoverage: {
            beautify: true
        }
    });