function waterfall(wrap,boxes) {
    // 获取屏幕可以显示的列数
    var boxWidth = boxes[0].offsetWidth + 20; //每个盒子宽度 + 外边框
    // console.log(boxWidth);
    var windowWidth = document.documentElement.clientWidth; //浏览器宽度
    var colsNumber = Math.floor(windowWidth / boxWidth); //colsNumber 等于 5

    // 设置容器的宽度 为了居中
    wrap.style.width = boxWidth * colsNumber + 'px';

    // 定义一个数组并存储每一列的高度
    var everyHeight = new Array();
    for (var i = 0; i < boxes.length; i++) { //遍历18个所有盒子
        if (i < colsNumber){ //i 小于列数 5
            everyHeight[i] = boxes[i].offsetHeight + 20; //现在everyHeight 有5个值
            // console.log(everyHeight);
        } else { // 大于列数 5 后
            var minHeight = Math.min.apply(null,everyHeight); //找出第一列 5 个数里最小值
            var minIndex = getIndex(minHeight,everyHeight);
            var leftValue = boxes[minIndex].offsetLeft - 10;
            boxes[i].style.position = 'absolute';
            // console.log(minHeight);
            boxes[i].style.top = minHeight + 'px';
            boxes[i].style.left = leftValue + 'px';
            everyHeight[minIndex] += boxes[i].offsetHeight + 20;

        };
    };
};

// 获取最小列的索引
function getIndex(minHeight,everyHeight) {
    for (index in everyHeight) {
        if (everyHeight[index] == minHeight) {
            // console.log(index);
            return index;
        };
    };
};

window.onload = function() {
    var wrap = document.getElementById('wrap'); 
    var boxes = wrap.getElementsByTagName('div');
    waterfall(wrap,boxes);
}