/**
 * Created by Administrator on 2016/2/24.
 */
define(function(require){

    var rules ={
    };

    return{
        route:function(request){
            if(rules[request]){
                rules[request]();
            }else{
                alert(404);
            }
        },
        addRule:function(hash,handler){
            rules[hash] = handler;
        }
    }
});