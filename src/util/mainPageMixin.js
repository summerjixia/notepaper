
//up刷新 down获取更多内容 left导航页 right内容删除
const startPosition = { x: 0, y: 0 };
const movePosition = { x: 0, y: 0 };
let bodyClick, touchStart, touchmove, touchend;

//body点击事件
bodyClick = function (e) {
    e.stopPropagation();
    this.leftNavState = false;
};

//触摸开始
touchStart = event => {
    movePosition.x = startPosition.x = Math.ceil(
        event.targetTouches[0].screenX
    );
    movePosition.y = startPosition.y = Math.ceil(
        event.targetTouches[0].screenY
    );
};

//触摸
touchmove = function (event) {
    let touchXY = event.targetTouches[0];
    movePosition.x = Math.ceil(touchXY.screenX);
    movePosition.y = Math.ceil(touchXY.screenY);
    if (movePosition.x - startPosition.x > 30) {
        this.leftNavState = true;
    }
};

//结束触摸
touchend = function (event) {
};

let created = function () {
    bodyClick = bodyClick.bind(this), touchStart = touchStart.bind(this),
        touchmove = touchmove.bind(this), touchend = touchend.bind(this);
    document.body.addEventListener("click", bodyClick);
    document.body.addEventListener("touchstart", touchStart);
    document.body.addEventListener("touchmove", touchmove);
    document.body.addEventListener("touchend", touchend);
}

let beforeDestory = function () {
    document.body.removeEventListener("click", bodyClick);
    document.body.removeEventListener("touchstart", touchstart);
    document.body.removeEventListener("touchmove", touchmove);
    document.body.removeEventListener("touchend", touchend);
}

export default {
    created, beforeDestory
}