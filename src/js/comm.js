$(function () {
            // var ddl = $(".daohan").children();
            var ddd = $(".daohan").children().children("dd");
            $(".daohan").children().on("mousemove", function () {
                $(".daohan").children("dl").eq($(this).index()).css("backgroundColor", "#fff");
                $(".daohan").children().children("dd").eq($(this).index()).css("display", "block");
                $(".daohan").children().children("dt").eq($(this).index()).css({
                    "border-top-color": "#ccc",
                    "border-bottom-color": "#ccc",
                    "border-left-color": "#fb60a7"
                });
                $(".daohan").children().children(".l_tiao").eq($(this).index()).css("display", "block");
                $(".inner").eq($(this).index()).css("border-color", "transparent");
                $(".inner").eq($(this).index() - 1).css("border-color", "transparent");
                var hig = $(".daohan").outerHeight() - $(".daohan").children().children("dd").outerHeight();
                var top = $(".daohan").children().outerHeight() * $(this).index() - $(".daohan").children().outerHeight() * 3 - 36;
                if ($(".inner").eq($(this).index()).offset().top - 218 > hig) {
                    $(".daohan").children().children("dd").eq($(this).index()).css("top", -top);
                }
            });
            $(".daohan").children().on("mouseout", function () {
                $(".daohan").children().children("dd").eq($(this).index()).css("display", "none");
                $(".daohan").children("dl").eq($(this).index()).css("background", "rgba(255, 255, 255, 0.7)");
                // console.log($(".daohan").children().children("dd").eq(0).prev());    background: rgba(255, 255, 255, 0.8);
                $(".daohan").children().children("dt").eq($(this).index()).css({
                    "border-top-color": "transparent",
                    "border-bottom-color": "transparent",
                    "border-left-color": "transparent"
                });
                $(".daohan").children().children(".l_tiao").eq($(this).index()).css("display", "none");
                $(".inner").eq($(this).index()).css("border-color", "#ccc");
                $(".inner").eq($(this).index() - 1).css("border-color", "#ccc");
            });
            //滑过微信二维码显示
            $(".both .fix_r figure").eq(2).on("mouseenter", function () {
                $(".both .fix_r figure .erw").css("display", "block");
                $(".both .fix_r figure .erw").animate({
                    marginRight: 0
                });
            });
            $(".both .fix_r figure").eq(2).on("mouseleave", function () {
                $(".both .fix_r figure .erw").css({
                    display: "none",
                    marginRight: "50px"
                });
            });
            //滑到一定高度就显示


            $(window).scroll(function () {
                if ($(document).scrollTop() > 300) {
                    $(".both").css("display", "block");
                } else {
                    $(".both").css("display", "none");
                }
            })
        });