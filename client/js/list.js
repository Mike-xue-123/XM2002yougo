$(() => {
    getDataAndRenderUI("default");
    getPageCount();


    /* 获取页码的数量 */
    function getPageCount() {
        $.ajax({
            type: "get",
            url: "../../server/php/getPageCount.php",
            success: function (response) {
                // console.log("页码", response);
                /* 创建页码 */
                let pageStr = "";
                for (let i = 0; i < response; i++) {
                    pageStr += `<li class='p-class${i==0?"active":""}'><a href="javascript:void(0)">${i+1}</a></li>`
                }
                $(pageStr).insertBefore("#nextPage");
            }
        });
    }

    /* 1、发送网络请求获取服务器端的数据 */
    function getDataAndRenderUI(sort, page = 0) {
        $.ajax({
            url: "../../server/php/list.php",
            data: {
                sort,
                page: page
            },
            dataType: "json",
        }).done(data => {
            let html = data.map(item => {
                return ` <li>
			          <div class="srchlst-wrap"data-id=${item.goods_id}>
                        <div class="hd goods-head">
				           <a >
                            <sup no="101361998" class="mark_small_101361998 salepic"></sup>
                            <img width="230" height="230" class="" src="${item.img}">
                            </a>
				        </div>
				        <div class="bd goods-desc">
	            			<span class="nptt">
                                <a target="_blank"  class="elli" >${item.particulars}</a>
                            </span>
                            <p class="price_sc price-wrap">
                                <em class="ygprc15 price_no101361998 cur-price">¥&nbsp;<i>${item.priceA}</i></em>
                                <del class="origin-price">¥&nbsp;<i>${item.priceB}</i></del>
                            </p>
                            <em class="collect" id="${item.goods_id}"  price="589"></em>
                             <p class="addCart">加入购物车</p>
                        </div>
                       
	        		  </div>
			    	</li>`


            }).join("");
            $(".new_prdlist").html(html);
        })
    }



    /* 排序功能 */
    $(".sub-title-tab a").click(function (e) {
        console.log(this);

        /* 选中状态 */
        // $(e.target).addClass("active").parent().siblings().removeClass("active");
        $(e.target).addClass("active").parent().siblings().find("a").removeClass("active");
        // console.log($(e.target).addClass("active").parent().siblings().find("a"));

        let sortType = $(this).data().sort;
        // console.log($(this).eq(0));
        getDataAndRenderUI(sortType);
        /* 切换当前显示的标签 */
        // let sortType = $(this).data().sort;
        // getDataWithPage(sortType);
        /* 发送网络请求：请求排序后的数据 */
        // $.ajax({
        //     type: "get",
        //     url: "../../server/php/list.php",
        //     data: "sort=" + sortType,
        //     dataType: "json",
        //     success: function (data) {
        //         // console.log(data);

        //         let html = data.map(item => {
        //             return ` <li>
        //                           <div class="srchlst-wrap">
        //                             <div class="hd goods-head">
        //                                <a >
        //                                 <sup no="101361998" class="mark_small_101361998 salepic"></sup>
        //                                 <img width="230" height="230" class="" src="${item.img}">
        //                                 </a>
        //                             </div>
        //                             <div class="bd goods-desc">
        //                                 <span class="nptt">
        //                                     <a target="_blank"  class="elli" >${item.particulars}</a>
        //                                 </span>
        //                                 <p class="price_sc price-wrap">
        //                                     <em class="ygprc15 price_no101361998 cur-price">¥&nbsp;<i>${item.priceA}</i></em>
        //                                     <del class="origin-price">¥&nbsp;<i>${item.priceB}</i></del>
        //                                 </p>
        //                                 <em class="collect" id="${item.goods_id}"  price="589"></em>
        //                             </div>
        //                           </div>
        //                         </li>`


        //         }).join("");
        //         $(".new_prdlist").html(html);
        //     }

        // });
    })

    /* 分页的功能 */
    $(".pagination").on("click", "a", function (e) {
        // console.log("i++");
        e.preventDefault();

        // $(e.target).addClass("active").parent().siblings().find("a").removeClass("active");
        // $(this).addClass("cur").siblings().removeClass("cur");
        if ($(this).parent()[0].id == "prevPage" || $(this).parent()[0].id == "nextPage") return;
        /* 设置选中状态的切换 */
        console.log($(this).parent()[0]);

        $(this).parent().addClass("active").siblings().removeClass("active");
        let page = $(this).text() * 1 - 1;
        console.log(page);
        getDataAndRenderUI($(".active").data().sort, page)

    })
    /* 上一页 下一页 的 功能 */
    $("#prevPage,#nextPage").click(function () {
        /* 设置选中状态 */
        let page = $(".active").text() * 1 - 1;
        console.log("page", page);
        if (this.id == "prevPage") {
            page--;
        } else if (this.id == "nextPage") {
            page++;
        }
        $(".p-class").eq(page).addClass("active").siblings().removeClass("active");
        // console.log($("pagination").children("li:gt(0)").eq(page));
        getDataAndRenderUI($(".active").data().sort, page)
    })


    /* 加入购物车点击事件的处理 */
    $(".new_prdlist").on("click", ".addCart", function () {
        let Id = localStorage.getItem("Id") || "";
        let number = localStorage.getItem("number") || "";
        let good_id = $(this).parent().attr("data_id");

        if (!Id && !number) {
            $.ajax({
                url: "../../server/php/Cart.php",
                data: {
                    Id,
                    good_id
                },
            }).done(data => {
                console.log("返回值", data);


            });
        } else {
            location.href = "../html/Login.html"
        }
    })

})