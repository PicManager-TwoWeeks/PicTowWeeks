/**
 * Created by Administrator on 2016/2/24.
 */
define(function (require){

    var locator = require('../javascript/locator');
    var router = require("../javascript/router");

    require('../javascript/routes');

    locator.start(function(){
        /*var hash = location.hash;
        var object =  document.getElementById('pic');
        object.innerHTML = hash;*/
        router.route(location.hash);
    });
});