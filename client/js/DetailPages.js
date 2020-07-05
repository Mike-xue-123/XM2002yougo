$(() => {
    // /* 类 放大镜 */
    // function Mirror(oBox, obj) {
    //     this.oBox = oBox;
    //     let defaultObj = {
    //         width: 80,
    //         heigth: 120,
    //         multiple: 3,
    //         color: "red",
    //         opacity: 0.3,
    //         left: 0,
    //         top: 0,
    //         img: "http://i1.ygimg.cn/pics/belle/2020/101305752/101305752_06_m.jpg?9",
    //     }

    //     /*  */
    //     for (let key in obj) {
    //         defaultObj[key] = obj[key];
    //     }

    //     for (let key in defaultObj) {
    //         this[key] = defaultObj[key];
    //     }


    // }
    // /* 创建DOM */
    // Mirror.prototype.createDom = function () {

    // }









    let oMirrorBox = document.querySelector(".jqZoomPup");
    let oBox = document.querySelector(".goodsPic");
    let oShowBox = document.querySelector(".zoomdiv");
    let o = document.querySelector(".jqZoomPup")
    let boxOffsetLeft = oBox.offsetLeft;
    let boxOffsetTop = oBox.offsetTop;
    let mirrorWidth = oMirrorBox.offsetWidth;
    let mirrorHeight = oMirrorBox.offsetHeight;

    // 1. 给小图片盒子绑定鼠标移入事件
    oBox.onmouseenter = function () {
        // 2. 让黑色遮罩显示
        mask.style.display = "block";
        maxBox.style.display = "block";
    }

    // 3. 给小图片盒子添加一个鼠标移出 事件
    oShowBox.onmouseleave = function () {
        // 4. 隐藏遮罩和大图片盒子
        mask.style.display = "none";
        maxBox.style.display = "none";
    }

    oBox.onmousemove = function (event) {
        console.log("oBox");

        let e = event || window.event;

        let left1 = e.pageX - boxOffsetLeft - mirrorWidth / 2;
        let top1 = e.pageY - boxOffsetTop - mirrorHeight / 2;

        /* 处理边界 */
        if (left1 < 0) {
            left1 = 0;
        } else if (left1 + mirrorWidth > 500) {
            left1 = 500 - mirrorWidth;
        }

        if (top1 < 0) {
            top1 = 0;
        } else if (top1 + mirrorHeight > 485) {
            top1 = 485 - mirrorHeight;
        }
        /* 外观呈现 */
        oMirrorBox.style.left = left1 + "px";
        oMirrorBox.style.top = top1 + "px";
        /*  */

        oShowBox.style.backgroundPosition = `-${left1*2}px -${top1*2}px`;
    }
})