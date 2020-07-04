$(() => {

    // /* tab切换 */

    $(".tabs a").click(function () {
        console.log(this);
        // e.preventDefault();
        /* 设置当前选中标签 */
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();
        $(".swiper-wrap").eq(index).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
        // $(".swiper-wrap").eq(index).addClass("loginViewCurrent").style("display:").siblings().removeClass("loginViewCurrent");
    });
    // $(".tab-s a").click(function () {
    //     console.log(this);
    //     // e.preventDefault();
    //     /* 设置当前选中标签 */
    //     $(this).addClass("active").siblings().removeClass("active");

    //     let index = $(this).index();
    //     $(".brand-pictures").eq(index).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    //     // $(".swiper-wrap").eq(index).addClass("loginViewCurrent").style("display:").siblings().removeClass("loginViewCurrent");
    // });

    onload = function () {
        let oDiv = document.getElementsByClassName("swiper-item-wrap")[0];
        $.getJSON("../../server/json/index_1.json", (data) => {
            // console.log(data);
            // let result = "";
            // for (let i = 0; i < data.length; i++) {
            //     // console.log(data[i]);
            //     let item = data[i];
            //     result = `
            //             <div class="swiper-item-wrap" id="swiper1" style="left: 0px;">
            //             <div class="swiper-sub-item">
            //                 <div class="goods-img">
            //                     <a href="" target="_blank">
            //                         <img src="${item.imgA}" alt="">
            //                     </a>
            //                 </div>
            //                 <img src="${item.imgB}" alt="">
            //                 <p>
            //                     <a href="" target="_blank">${item.title}</a>
            //                 </p>
            //                 <div class="price-wrap">
            //                     <div>￥
            //                         <span>${item.price}</span>
            //                     </div>
            //                     <div class="collect"></div>
            //                 </div>
            //             </div>
            //         </div>
            //     `
            // }
            // oDiv.innerHTML = result;
            let html = data.map(item => {
                return `
               
                                <div class="swiper-sub-item">
                                    <div class="goods-img">
                                        <a href="" target="_blank">
                                            <img src="${item.imgA}" alt="">
                                        </a>
                                    </div>
                                    <img src="${item.imgB}" alt="">
                                    <p>
                                        <a href="" target="_blank">${item.title}</a>
                                    </p>
                                    <div class="price-wrap">
                                        <div>￥
                                            <span>${item.price}</span>
                                        </div>
                                        <div class="collect"></div>
                                    </div>
                                </div>
                         
                `
            }).join("");
            // console.log(arr.join(""));
            oDiv.innerHTML = html;
        })

    }

    let oDivs = document.getElementsByClassName("swiper-item-wrap")[1];
    $.getJSON("../../server/json/index_2.json", (data) => {
        let html = data.map(item => {
            return `
               
                                <div class="swiper-sub-item">
                                    <div class="goods-img">
                                        <a href="" target="_blank">
                                            <img src="${item.imgA}" alt="">
                                        </a>
                                    </div>
                                    <img src="${item.imgB}" alt="">
                                    <p>
                                        <a href="" target="_blank">${item.title}</a>
                                    </p>
                                    <div class="price-wrap">
                                        <div>￥
                                            <span>${item.price}</span>
                                        </div>
                                        <div class="collect"></div>
                                    </div>
                                </div>
                         
                `
        }).join("");
        // console.log(arr.join(""));
        oDivs.innerHTML = html;
    })


    /* 今日大牌tab切换 */

    // $(".tab-s a").click(function () {
    //     console.log(this);
    //     // e.preventDefault();
    //     /* 设置当前选中标签 */
    //     $(this).addClass("active").siblings().removeClass("active");

    //     let index = $(this).index();
    //     $(".brand-pictures").eq(index).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    //     // $(".swiper-wrap").eq(index).addClass("loginViewCurrent").style("display:").siblings().removeClass("loginViewCurrent");
    // });
})