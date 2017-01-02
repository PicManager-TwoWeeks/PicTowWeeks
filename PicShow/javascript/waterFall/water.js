/**
 * Created by Administrator on 2016/2/25.
 *瀑布流的方式加载图片
 */

define(function(require){
    var picghtOfPic = []; //每个元素的宽度
    var colsHeight = []; //每一列现在的高度
    var imgObjects = []; //图片对象

    return {
        getMinHeightOfColumn:function(){
            var maxOfcolsHeight =  Math.min.apply(null,colsHeight);

            return maxOfcolsHeight;
        },
        addImgInfo:function(imgHeight,imgUrl,clasify){
            var imgObject = {
                "imgHeight":imgHeight,
                "imageUrl":imgUrl,
                "clasify":clasify
            };

            colsHeight.push(imgHeight);
            imgObjects.push(imgObject);
        }
    }
});
