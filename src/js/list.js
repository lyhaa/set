$(function(){
    // console.log($("#jiage"));
    var isok = true;
    $("#jiage").on("click",function(){
        $("#pica").css("color", "#000");
        if(isok){
            $(this).addClass("jia_zeng");
            fenye("current", "DESC","");
        }else{
            $(this).removeClass("jia_zeng");
            $(this).addClass("jia_jian");
            fenye("current", "ASC", "");
        }
        isok = !isok;
    })
    var issk = true;
    $("#pica").on("click",function(){
        $("#jiage").removeClass();
        if(issk){
            $(this).css("color","red");
            fenye("suiji", "", "");
        }else{
            $(this).css("color", "#000");
        }
        issk = !issk;
    });
    var arrtex = new Array();
    $("#paiii input:button").on("click",function(){
        var tex1 = $("#paiii input:text").eq(0).val();
        var tex2 = $("#paiii input:text").eq(1).val();
        var texz = /\d/;
        if(texz.test(tex1)&&texz.test(tex2)){
            arrtex.push(tex1,tex2);
            if(arrtex.length>2){
                arrtex.splice(0,2);
                fenye("current", "", arrtex.splice(0, 2));
            }
            // console.log(arrtex.length);
            // console.log(arrtex);
        }
        $("#paiii input:text").eq(0).val("");
        $("#paiii input:text").eq(1).val("");
    })
    var page = 0;
    var listsd = document.querySelector('.listsd');
            $.ajax({
            type:"GET",
            url: "../api/lists.php",
            dataType: 'json',
            success: function (data) {
                page = data.row;
                var des = data.goodlist.map(function (elea) {
                    // listsd.innerHTML = "";
                        return  `<div class="liss clearfix" did="${elea.did}">
                                        <div class="l_t">
                                            <a href="###"><img src="../images/images/timg.gif" alt=""data-src="../images/images/${elea.image}" class="immgs"></a>
                                        </div>
                                        <div class="l_b">
                                            <p class="paic"><span>￥${elea.current}</span><em>￥${elea.original}</em></p>
                                            <p class="conten">${elea.title}</p>
                                        </div>
                                    </div>`;
                           }).join('');
                            // console.log($(".immgs"));
                           listsd.innerHTML = des;
                             immg(".immgs");
                                // console.log(page);
                                $('.listsd').paginathing({
                                    perPage: 40,
                                    limitPagination: 10,
                                    pageNumbers: true,
                                    prevText:"<",
                                    nextText:">",
                                    firstText:"首页",
                                    lastText:"最后一页",
                                    pageNumbers: false
                                })
                                $(".liss").on("click",function(){
                                    // console.log($(this).attr("did"))
                                    location.href = "../html/detail.html?did=" + $(this).attr("did");
                                })
                var paae;
            }
        })
    function fenye(type="",pajia="",pj=""){
         $.ajax({
             type: "GET",
             url: "../api/lists.php?type="+type+"&pajia="+pajia+"&pj="+pj,
             dataType: 'json',
             success: function (data) {
                 page = data.row;
                 var des = data.goodlist.map(function (elea) {
                     // listsd.innerHTML = "";
                     return `<div class="liss clearfix" did="${elea.did}">
                                        <div class="l_t">
                                            <a href="###"><img src="../images/images/timg.gif" alt=""data-src="../images/images/${elea.image}" class="immgs"></a>
                                        </div>
                                        <div class="l_b">
                                            <p class="paic"><span>￥${elea.current}</span><em>￥${elea.original}</em></p>
                                            <p class="conten">${elea.title}</p>
                                        </div>
                                    </div>`;
                 }).join('');
                 listsd.innerHTML = des;
                //   $('.listsd').paginathing("");
                 $('.listsd').paginathing({
                     perPage: 40,
                     limitPagination: 10,
                     pageNumbers: true,
                     prevText: "<",
                     nextText: ">",
                     firstText: "首页",
                     lastText: "最后一页",
                     pageNumbers: false
                 })
                  $(".pagination-container").eq(0).remove();
                   $(".liss").on("click", function () {
                       location.href = "../html/detail.html?did=" + $(this).attr("did");
                   })
                }
            })
        }
        immg(".immgs");
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
     }

})