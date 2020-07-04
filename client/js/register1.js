/* 分析： */
/* (1) 表单验证 */
/* (2) 图形验证码 */
/* (3) 点击注册 */
$(() => {
    // $("#number").val(15007219074);
    // $("#password").val("15007219wer");
    // $("#password2").val("15007219wer");

    let options = {
        "number": {
            res: `/^1[3-9]\\d{9}$/.test(val)`,
            msg: "格式错误！"
        },
        "password": {
            res: `/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,25}$/.test(val)`,
            msg: "密码不规范！"
        },
        "password2": {
            res: `$.trim($("#password").val()) == val`,
            msg: "两次输入的密码不一致！！！"
        },
        "code2_": {
            res: "imgCode == val",
            msg: "输入的验证码不正确！！！",
        }
    }

    $(".nreg_from input").blur(function () {
        let action_id = this.id;
        // console.log("options", options[action_id]);
        // let res = /^1[3-9]\\d{9}$/.test(val);
        let val = $.trim($(this).val());
        // console.log(options[action]);
        if (eval(options[action_id].res)) {
            $(this).parents(".nreg_item").children("dt").children(".errortips").text();
            /* 设置input的样式 */
            $(this).removeClass("nreg_error");
        } else {
            $(this).parents('.nreg_item').children("dt").children("div.errortips").text(options[action_id].msg);
            /* 设置input的样式 */
            $(this).addClass("nreg_error");
        }
    });




    /* 图形验证码 */
    /* [1] 先下载和引用插件 */
    /* [2] 在页面中指定的位置提供canvas标签 */
    /* [3] 在js代码中调用插件中提供的构造函数创建实例对象，并且调用draw方法 */
    /*不传值，统一走默认值*/



    let imgCode;
    /*不传值，统一走默认值*/
    let captcha = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 2, //线条数量
        // dotR: 200, //点的半径
        // dotNum: 1000, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 40, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: '0123456789', //验证码内容
        length: 4 //验证码长度
    });

    captcha.draw(document.querySelector('#captcha'), r => {
        console.log('验证码', r);
        imgCode = r;

        /* 自动触发标签的事件 */
        // $("#code2_").trigger("blur");
    });

    /* 注册按钮的点击事件 */
    $("#registerBtn").click(function (e) {
        // console.log("+++++");
        e.preventDefault();
        // console.log("click--");

        /* 001-检查用户是否输入了正确的信息并且通过验证，如果没有通过那么就返回 */
        // $("#number,#password,#password2,#code2_").trigger("blur");

        if ($(".nreg_error").length !== 0) {
            // console.log(1);
            return;
            // console.log(1);
        }
        // console.log(2);

        // if (!ok0) {
        //     alert("ok0检查没有通过");
        // }
        // $(".submit").click(function () {
        //     if ("#number,#password,#password2,#code2_") {
        //         $('form').submit();
        //     } else {
        //         return false;
        //     }
        /* 安全条例 */

        let isCheck = $("#rules").is(":checked");
        // console.log(isCheck);
        if (!isCheck) {
            alert("请阅读并同意用户的注册协议!!!");
            return;
        }
        // console.log(3);

        /* 003-发送网络请求把注册相关的信息提交给服务器 */
        let data = {
            number: $.trim($("#number").val()),
            password: $.trim($("#password").val())
        }

        // console.log("click++++");
        $.ajax({
            url: "../../server/php/register.php",
            type: "post",
            data,
            dataType: "json",
        }).done(data => {
            // console.log(data);
            if (data.status == "success") {
                alert("注册成功!");
                location.href = "../html/Login.html";
            } else {
                alert(data.msg);
            }
        })

    });

})