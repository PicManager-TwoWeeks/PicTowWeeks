/**
 * Created by Administrator on 2016/2/24.
 */
define(function(require){

    return{
        start:function(handler){
            window.onhashchange = handler;
            handler();
        },
        stop:function(){
            window.onhashchange = null;
        }
    }
});