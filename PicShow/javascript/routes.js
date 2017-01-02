/**
 * Created by Administrator on 2016/2/24.
 */
define(function(require){
    var router = require('javascript/router');

    var rules = [{
        hash:'#/all',
        handler:require('./pageHandler/all'),
    },{
        hash:'#/person',
        handler:require('./pageHandler/person'),
    },{
        hash:'#/scenery',
        handler:require('./pageHandler/scenery'),
    },{
        hash:'#/confidential',
        handler:require('./pageHandler/confidential'),
    },{
        hash:'#/documentary',
        handler:require('./pageHandler/documentary'),
    },{
        hash:'#/macro',
        handler:require('./pageHandler/macro'),
    },{
        hash:'#/animal',
        handler:require('./pageHandler/animal'),
    }];

    rules.forEach(function(rule){
        router.addRule(rule.hash,rule.handler);
    });
})