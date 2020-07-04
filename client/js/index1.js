$(() => {

    // /* tab切换 */

    $(".tabs >a").click(function () {
        console.log(this);
        /* 设置当前选中标签 */
        $(this).addClass("active").siblings().removeClass("active");

        let index = $(this).index();
        $(".swiper-wrap").eq(index).show().siblings('.div_list').hide();
    });


})