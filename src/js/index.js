$(function () {
    //发送数据库查询
    $.ajax({
        type: 'GET',
        url: "../api/list.php?uname=" + "为你推荐",
        dataType: 'json',
        success: function (data) {
            var matt = data.map(function (item) {
                return `
                    <li class="fl clearfix" gid="${item.gid}">
                            <figure>
                                <a href="###">
                                    <img src="./images/images/timg.gif" alt="" class="immgs" data-src="./images/images/${item.images}"">
                                    <fieldset>
                                        <div class="title_t">
                                            <h6>${item.conen}</h6>
                                            <p>${item.conen2}</p>
                                        </div>
                                        <div class="price">
                                            <div class="l">
                                                <span class="price1">
                                                秒杀价:￥<em>${item.cuprice}</em>
                                                </span>
                                                <span class="price2">
                                                    市场价:￥<em>${item.orprice}</em>
                                                </span>
                                            </div>
                                            <div class="r">
                                                <span class="rush">
                                                    马上抢
                                                </span>
                                                <span class="sales">${item.salese}</span>
                                            </div>
                                        </div>
                                    </fieldset>
                                </a>
                            </figure>
                        </li>
                `;
            }).join("");
            $(".mconxp").html(matt);
            immg(".immgs");
            // document.children
            $(".mconxp").children().on("click", function () {
                location.href = "./html/detail.html?gid=" + $(this).attr("gid");
                // console.log($(this).attr("gid"));
            })
            //  console.log($(".immgs"));
            //  console.log($(window).scrollTop());
        }
    });
    var arr = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = new Array();
    $.ajax({
        type: 'GET',
        url: "../api/inde.php?uname=" + "大牌尖货",
        dataType: 'json',
        success: function (data) {
            for (var j = 0; j < data.shop.length; j++) {
                let shop = data.shop[j].shop;
                // console.log(shop);
                var obj = {
                    shop,
                    data: []
                }
                for (var i = 0; i < data.content.length; i++) {
                    if (data.content[i].shop == obj.shop) {
                        obj.data.push(data.content[i]);
                    }
                }
                arr.push(obj);
            }
            // console.log(arr);
            var aee;
            var commodity = document.querySelector(".commodity");
            for (var k = 0; k < 8; k++) {
                var rodo = parseInt(Math.random() * arr.length);
                aee = arr[rodo];
                var dde = aee.data;
                var abc = aee.data.splice(-5);
                // aee.data.splice(-5).forEach(itemm => {
                // console.log(abc[0].imges2)
                commodity.innerHTML += `<div class="dity">
                                    <section class="ty_t">
                                        <div class="d_l">
                                            <a href="###">
                                                <span><img src = "./images/images/timg.gif" alt = "" class="immgs" data-src="./images/images/${decodeURI(abc[0].imges2)}"></span>
                                                <p>${aee.shop}</p>
                                            </a>
                                        </div>
                                        <div class="d_r">
                                            <a href="###">
                                                <span class="gbuy">${abc[0].groupbuy}</span>
                                            </a>
                                        </div>
                                    </section>
                                    <section class = "ty_b">
                                    ${render(abc)}
                                    </section>
                                </div>`;
                // });
                var buy = $(".gbuy");
                $(".commo").on("click", function () {
                    // console.log($(this).attr("gid"))
                    location.href = "./html/detail.html?gid=" + $(this).attr("gid");
                })
                // console.log()
                for (var i = 0; i < buy.length; i++) {
                    if (buy[i].innerText == "") {
                        buy[i].style.display = "none";
                    }
                }
                var buy1 = $(".len");
                console.log()
                for (var i = 0; i < buy1.length; i++) {
                    if (buy1[i].innerText == "") {
                        buy1[i].style.display = "none";
                    }
                }
            }
            //  console.log($(".immgs"));
            immg(".immgs")
        }
    });
});

function render(itemm) {
    return itemm.map((item) => {
        return `
            <a href="###" class="fl clearfix">
                    <div class="commo" gid="${item.gid}">
                        <figure>
                            <img src="./images/images/timg.gif" alt="" class="immgs" data-src="./images/images/${item.images}">
                            <fieldset>
                                <p class="titl">${item.conen}</p>
                                <span>￥${item.orprice}<em>￥${item.cuprice}</em></span>
                            </fieldset>
                        </figure>
                        <span class="len">${item.Spree}</span>
                    </div>
            </a>`
    }).join('');
}

function immg(immg) {
    var clock;
    $(window).on("scroll", function () {
        if (clock) {
            clearTimeout(clock);
        }
        clock = setTimeout(function () {
            lazyRender();
        }, 200)
    })

    function lazyRender() {
        $(immg).each(function () {
            if (checkShow($(this)) && !isLoaded($(this))) {
                loadimg($(this));
            }
        })
    }

    function checkShow($img) {
        var scrollTop = $(window).scrollTop();
        var windowHight = $(window).height();
        var offsetTop = $img.offset().top;
        if (offsetTop < (scrollTop + windowHight) && offsetTop > scrollTop) {
            return true;
        }
        return false;
    }

    function isLoaded($img) {
        return $img.attr('data-src') === $img.attr('src');
    }

    function loadimg($img) {
        $img.attr('src', $img.attr('data-src'));
    }
    $(".gouc").on("mouseover", function () {
        $.ajax({
            type: 'GET',
            url: "../api/goodcha.php",
            dataType: 'json',
            success: function (data) {
                $(".cxp")[0].innerHTML = "";
                if(data.length>=1){
                    $(".cxp1").css("display", "none");
                    for(var i=0;i<data.length;i++){
                    data[i].forEach(item => {
                    $(".cxp")[0].innerHTML +=`<div class="cxp2">
                                    <div class="cact_com clearfix">
                                        <div class="c_l">
                                            <a href=""><img src="./images/images/${item.imgaes}" alt=""></a>
                                        </div>
                                        <div class="c_r">
                                            <p>
                                                <a href="###">${item.title}</a>
                                                <span>$${item.place}</span>
                                            </p>
                                            <p>x5</p>
                                        </div>
                                    </div>
                                </div>`;
                                $(".cxp .cxp2").css("display", "block");
                        });
                    }
                }else{
                    $(".cxp1").css("display","block");
                    $(".cxp2").css("display","none");
                }
            }
        })
    })
    $(".gouc").on("mouseout", function () {
        $(".cxp")[0].innerHTML = "";
    })
}