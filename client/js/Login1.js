$(() => {

    $(".tab_sig_reg").children("li").click(function () {
        // console.log("this", $("this").index());
        /* (1) 设置当前标签的选中状态 */
        $(this).addClass("tab_cur").siblings().removeClass("tab_cur");

        /* (2) 切换显示对应的内容 */
        let index = $(this).index()

        $(".tb").eq(index).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent")
        // $(this).addClass("tab_cur").siblings().removeClass("active");
        // 

        // let index = $(this).index();
        // $(".tb").eq(index).addClass("tb_").siblings().removeClass("tb_");
    })

})