$(() => {

    // $(".tab_sig").click(function () {
    //     /* (1) 设置当前标签的选中状态 */
    //     $(this).addClass("tab_cur").siblings().removeClass("active");
    //     /* (2) 切换显示对应的内容 */

    //     let index = $(this).index();
    //     $(".tb").eq(index).addClass("tb_").siblings().removeClass("tb_");
    // })

    // $(function () {
    //     $('.tab_sig_reg>li').on('click', function () {
    //         // e.preventDefault();
    //         let num = $(this).index();
    //         $('.tab_sig_reg>li').each(function () {
    //             if ($(this).index() == num) {
    //                 $(this).attr("class", "tb current");
    //             } else {
    //                 $(this).attr("class", "tb");
    //             }

    //         });
    //     })
    // })
    /* 鼠标移入事件 */
    $(".tab_sig_reg>li").click(function () {
        console.log(this, $(this).index());

    })
})