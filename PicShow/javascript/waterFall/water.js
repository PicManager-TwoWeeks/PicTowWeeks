/**
 * Created by Administrator on 2016/2/25.
 *�ٲ����ķ�ʽ����ͼƬ
 */

define(function(require){
    var picghtOfPic = []; //ÿ��Ԫ�صĿ��
    var colsHeight = []; //ÿһ�����ڵĸ߶�
    var imgObjects = []; //ͼƬ����

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
