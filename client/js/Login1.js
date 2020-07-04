$(() => {

    $(".tab_sig_reg").children("li").click(function () {
        // console.log("this", $("this").index());
        /* (1) 设置当前标签的选中状态 */
        $(this).addClass("tab_cur").siblings().removeClass("tab_cur");

        /* (2) 切换显示对应的内容 */
        let index = $(this).index()
        $(".tab_one").eq(index).addClass("loginViewCurrent").style("display:").siblings().removeClass("loginViewCurrent");

    })


    /* 获取登录按钮，添加事件 */
    $(".nlog_submit").click(function () {
        let number = $.trim($("#email_").val());
        // console.log("number");

        let password = $.trim($("#password_").val());
        // console.log("password");

        // console.log("this");
        /* 先检查用户名和密码和是否勾选，都满足则发请求 */
        if (number.length == 0) {
            alert("用户名不能为空");
            return
        }

        if (password.length == 0) {
            alert("密码不能为空");
            return;
        }

        $.ajax({
            type: "post",
            url: "../../server/php/Login.php",
            dataType: "json",
            data: `number=${number}&password=${password}`
        }).done(data => {
            // alert(data.msg);
            /* 如果 */
            if (data.status == "success") {
                alert(data.msg);
                /* 跳转 */
                // location.href = "../html/index.html";
            } else {
                alert(data.msg);
            }
        })


    })
})