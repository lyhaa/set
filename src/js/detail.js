$(function(){
    var loca = location.href;
    var data_ = loca.split("?")[1];
    var data_id = data_.split("=");
    if(data_id[0]=="gid"){
        $.ajax({
            type:'GET',
            url:"../api/detaail.php?gid="+data_id[1],
            dataType: 'json',
                success: function (data) {
                    data.forEach(item => {
                    $(".w1004").html(` <div class="show clearfix" xid ="${item.id}">
                            <div class="left l rel fgow" style="position: relative;">
                                <!-- （大图）默认图 -->
                                <div class="big rel"><img
                                        src = "../images/images/${item.imgaes}"
                                        style="width: 400px; height: 400px;" class="fimg" xq_big="true" setting='{"pwidth":400,"pheight":400,"margin_top":0,"margin_left":0}'>
                                </div>
                                <!-- （缩略图）上展图 -->
                                <!-- <div class="make"> -->
                                    <div class="small">
                                        <img src="../images/images/1076433_normal_3_cdc68ccb.jpg" alt=""
                                            class="change_pic select_small_img">
                                        <img src="../images/images/1076449_normal_3_4721f92c.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1076458_normal_3_6eec71fe.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1108884_normal_3_8c17128d.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1204109_normal_3_e68f2477.jpg" alt="" class="change_pic mr0">
                                    </div>
                                </div>
                                <div class="right l right-groupon" style="position: relative;">
                                    <div class="M_productInfo">
                                        <div class="country fz14 mb10 clearfix">
                                            <div class="l">
                                            </div>
            
                                            <input type="hidden" id="share_pic" value="">
                                            <input type="hidden" id="share_name"
                                                value="">
                                        </div>
                                        <div class="brand fz14 mb10">
                                            <!--思源品牌，隐藏品牌-->
                                            <a href="" target="_blank">
                                                知识出版社 </a>
                                            <span>${item.title}</span>
                                        </div>
                                        <div class="titlecon clearfix mb10 fz14">
                                            <div class="left yahei l">
                                                <input type="hidden" name="item_id" id="item_id" value="3086361"
                                                    readonly="readonly">
                                                <a href="/list-.html" class="pink"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pi_price_box">
                                        <div class="price_info"><span class="tit_txt yahei">售价</span><span class="pbox_price"><i
                                                    class="pbox_yen">¥</i><em id="item_price">${item.place}</em></div>
                                        <div id="i_youhui_bak" class="i_youhui clearfix">
                                            <dt class="num_name tit_txt yahei" style="float:left;">优惠</dt>
                                            <dt class="num_txt" style="float:left;"><a href="/promotion-85123.html">
                                                    <div class="markwarp"><i
                                                            class="mark-manzeng">限时秒杀</i>每人限购5件,总限购500件,超出按照原价计算</div>
                                                </a><a href="/promotion-73448.html">
                                                </a></dt>
                                        </div>
                                        <div class="popup_mask"></div>
                                    </div>
                                    <div class="pi_attr_box">
                                        <div class="clearfix discount_f"></div>
                                        <input type="hidden" value="add" name="act">
                                        <input type="hidden" value="" name="client_time">
                                        <div id="popcomSkuArea" class="color"></div>
                                        <input type="hidden" value="" id="item_size" name="size" readonly="readonly">
                                        <input type="hidden" value="" id="sku_id" readonly="readonly">
                                        <dl id="J_num_select" class="i_num clearfix">
                                            <dt class="num_name tit_txt fz14">数量</dt>
                                            <dd class="num_box">
                                                <span class="num_reduce num_reduce_disabled J_num_act_reduce"></span>
                                                <em class="num_input" id="buyAmount">${item.page}</em>
                                                <span class="num_add J_num_act_add"></span>
                                            </dd>
                                        </dl>
                                        <!--预售商品提示-->
                                        <div class="clearfix cartAdd_submit hide" style="display: block;">
                                            <div class="button_f" id="itemProcess">
                                                <a href="javascript:void(0)" class="btn_07 fz14" id="J_cartAdd_submit">加入购物车</a>
                                                <p id="sepcailNotice"></p>
                                            </div>
                                        </div>
                                        <div class="pbox_pms yahei clearfix mb10">
                                            <ul>
                                                <li>非自营<span>本商品由商家发货并提供售后服务</span></li>
                                                <li>包邮<span>本商品支持包邮，除港澳台和部分偏远地区(如新疆、青海、西藏等)外，您无需承担运费</span></li>
                                                <li>7天放心退<span>符合消费者保障法规，可申请7天无理由退货</span></li>
                                                <li>支持换货<span>符合消费者保障法规，本商品可申请换货服务</span></li>
                                                <li>正品保障<span>所有商品均有太平洋保险承包产品质量保证险</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="J_detailShare_wrap" class="pi_share_box r">
                                    <span class="jiaaa jiathis_style_24x24">
                                        <a href="javascript:void(0)" class="jiathis_button_weixin" title="分享到微信"><span
                                                class="jiathis_txt jtico jtico_weixin"></span></a>
                                        <a href="javascript:void(0)" mars_sead="m_account_invite_sina"
                                            class="share_button_tsina"></a>
                                    </span>
                                </div>
                        </div>`);
                    });
                      $("#miya").flyto({
                          item: '.show',
                          target: '.gouc',
                          move: '.big',
                          button: '#J_cartAdd_submit'
                      })
                      $(".small").children().on("click", function () {
                          $(".show .big img").attr("src", $(this).attr("src"));
                      })
                      //放大鏡
                      ;
                      (function ($) {
                          var XQ_bigimg = function (xq_big) {
                              var self = this;
                              this.xq_big = xq_big;
                              this.width = xq_big.width();
                              this.height = xq_big.height();
                              this.top = xq_big.offset().top;
                              this.left = xq_big.offset().left;
                              this.pdiv = Math.floor(Math.random() * this.width * this.height);
                              this.setting = {
                                  "pwidth": 300,
                                  "pheight": 200,
                                  "scale": 3,
                                  "margin_top": 50,
                                  "margin_left": 50,
                                  "pclass": ""
                              }
                              $.extend(this.setting, this.getSetting());
                              this.imgsrc = this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
                              this.xq_big.hover(function () {
                                  self.createPchild(self.pdiv);
                                  self.imgsrc = $(this).attr("src");
                                  self.createImg();
                              }, function () {
                                  var pdiv = "#" + self.pdiv;
                                  $(pdiv).remove();
                              });
                              this.xq_big.mousemove(function (e) {
                                  var scrollTop = $(document).scrollTop();
                                  var scaleX = (e.clientX - self.left) / self.width; //处于左边部分的距离
                                  var scaleY = (e.clientY - self.top + scrollTop) / self.height; //处于顶部部分的距离
                                  self.updImg(scaleX, scaleY);
                              });
                          }
                          XQ_bigimg.prototype = {
                              createPchild: function (id) {
                                  var ele = document.createElement("div");
                                  var img = document.createElement("img");
                                  var scrollTop = $(document).scrollTop();
                                  $("body").append($(ele));
                                  $(ele).attr({
                                      'id': id
                                  }).css({
                                      'width': this.setting.pwidth + "px",
                                      'height': this.setting.pheight + "px",
                                      'position': 'fixed',
                                      'top': this.top + this.setting.margin_top - scrollTop,
                                      'left': this.left + this.width + this.setting.margin_left,
                                      'overflow': 'hidden'
                                  }).addClass(this.setting.pclass);
                              },
                              createImg: function () {
                                  var img = document.createElement("img");
                                  $(img).attr("src", this.imgsrc).css({
                                      'width': this.width * this.setting.scale,
                                      'height': this.height * this.setting.scale,
                                      'margin-top': '0px',
                                      'margin-left': '0px',
                                      'position': 'relative'
                                  });
                                  var pdiv = "#" + this.pdiv;
                                  $(pdiv).append($(img));
                              },
                              updImg: function (scaleX, scaleY) {
                                  var top = (scaleY * this.height * this.setting.scale) - (scaleY * this.setting.pheight);
                                  var left = (scaleX * this.width * this.setting.scale) - (scaleX * this.setting.pwidth);
                                  var pdiv = "#" + this.pdiv;
                                  $(pdiv).find("img").css({
                                      'top': -top + "px"
                                  });
                                  $(pdiv).find("img").css({
                                      'left': -left + "px"
                                  });
                              },
                              getSetting: function () {
                                  var setting = this.xq_big.attr("setting"); //节点属性配置参数
                                  if (setting && setting != "") {
                                      return $.parseJSON(setting);
                                  } else {
                                      return {};
                                  }
                              }
                          };
                          XQ_bigimg.init = function ($ele) {
                              var _this_ = this;
                              $ele.each(function () {
                                  new _this_($(this));
                              });
                          }
                          window['XQ_bigimg'] = XQ_bigimg;
                      })(jQuery)
                      $(function () {
                          XQ_bigimg.init($("[xq_big='true']"));
                      });
                    $(".J_num_act_add").on("click", function () {
                           $("#buyAmount")[0].innerText = ($("#buyAmount")[0].innerText) * 1 + 1;
                       })
                    $(".J_num_act_reduce").on("click", function () {
                        $("#buyAmount")[0].innerText = ($("#buyAmount")[0].innerText) * 1 - 1;
                        if (($("#buyAmount")[0].innerText) * 1 <= 1) {
                            $("#buyAmount")[0].innerText = 1;
                        }
                    })
                    var times;
                    $("#J_cartAdd_submit").on("click", function () {
                         clearTimeout(times);
                         //  console.log($(".show").attr("xid"))
                         $.ajax({
                             type: "GET",
                             url: "../api/goodsp.php?gid=" + $(".show").attr("xid") + "&shu=" + $("#buyAmount")[0].innerText,
                             dataType: 'json',
                             success: function (data) {
                                 console.log(data);
                                 if (data == 0) {
                                     times = setTimeout(function () {
                                         alert("成功加入购物车");
                                     }, 2000);
                                 }
                             }
                         })
                    })
                }
        })
    } else if(data_id[0] == "did"){
        $.ajax({
            type: 'GET',
            url: "../api/detaail.php?did=" + data_id[1],
            dataType: 'json',
            success: function (data) {
                if(data.length>1){
                     $(".w1004").html(` <div class="show clearfix" xid ="${data[0].id}">
                            <div class="left l rel fgow" style="position: relative;">
                                <!-- （大图）默认图 -->
                                <div class="big rel"><img
                                        src = "../images/images/${data[0].imgaes}"
                                        style="width: 400px; height: 400px;" class="fimg" xq_big="true" setting='{"pwidth":400,"pheight":400,"margin_top":0,"margin_left":0}'>
                                </div>
                                <!-- （缩略图）上展图 -->
                                <!-- <div class="make"> -->
                                    <div class="small">
                                        <img src="../images/images/1076433_normal_3_cdc68ccb.jpg" alt=""
                                            class="change_pic select_small_img">
                                        <img src="../images/images/1076449_normal_3_4721f92c.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1076458_normal_3_6eec71fe.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1108884_normal_3_8c17128d.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1204109_normal_3_e68f2477.jpg" alt="" class="change_pic mr0">
                                    </div>
                                </div>
                                <div class="right l right-groupon" style="position: relative;">
                                    <div class="M_productInfo">
                                        <div class="country fz14 mb10 clearfix">
                                            <div class="l">
                                            </div>
            
                                            <input type="hidden" id="share_pic" value="">
                                            <input type="hidden" id="share_name"
                                                value="">
                                        </div>
                                        <div class="brand fz14 mb10">
                                            <!--思源品牌，隐藏品牌-->
                                            <a href="" target="_blank">
                                                知识出版社 </a>
                                            <span>${data[0].title}</span>
                                        </div>
                                        <div class="titlecon clearfix mb10 fz14">
                                            <div class="left yahei l">
                                                <input type="hidden" name="item_id" id="item_id" value="3086361"
                                                    readonly="readonly">
                                                <a href="/list-.html" class="pink"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pi_price_box">
                                        <div class="price_info"><span class="tit_txt yahei">售价</span><span class="pbox_price"><i
                                                    class = "pbox_yen" > ¥ </i><em id="item_price">${data[0].place}</em > </div>
                                        <div id="i_youhui_bak" class="i_youhui clearfix">
                                            <dt class="num_name tit_txt yahei" style="float:left;">优惠</dt>
                                            <dt class="num_txt" style="float:left;"><a href="/promotion-85123.html">
                                                    <div class="markwarp"><i
                                                            class="mark-manzeng">限时秒杀</i>每人限购5件,总限购500件,超出按照原价计算</div>
                                                </a><a href="/promotion-73448.html">
                                                </a></dt>
                                        </div>
                                        <div class="popup_mask"></div>
                                    </div>
                                    <div class="pi_attr_box">
                                        <div class="clearfix discount_f"></div>
                                        <input type="hidden" value="add" name="act">
                                        <input type="hidden" value="" name="client_time">
                                        <div id="popcomSkuArea" class="color"></div>
                                        <input type="hidden" value="" id="item_size" name="size" readonly="readonly">
                                        <input type="hidden" value="" id="sku_id" readonly="readonly">
                                        <dl id="J_num_select" class="i_num clearfix">
                                            <dt class="num_name tit_txt fz14">数量</dt>
                                            <dd class="num_box">
                                                <span class="num_reduce num_reduce_disabled J_num_act_reduce"></span>
                                                <em class="num_input" id="buyAmount">${data[0].page}</em>
                                                <span class="num_add J_num_act_add"></span>
                                            </dd>
                                        </dl>
                                        <!--预售商品提示-->
                                        <div class="clearfix cartAdd_submit hide" style="display: block;">
                                            <div class="button_f" id="itemProcess">
                                                <a href="javascript:void(0)" class="btn_07 fz14" id="J_cartAdd_submit">加入购物车</a>
                                                <p id="sepcailNotice"></p>
                                            </div>
                                        </div>
                                        <div class="pbox_pms yahei clearfix mb10">
                                            <ul>
                                                <li>非自营<span>本商品由商家发货并提供售后服务</span></li>
                                                <li>包邮<span>本商品支持包邮，除港澳台和部分偏远地区(如新疆、青海、西藏等)外，您无需承担运费</span></li>
                                                <li>7天放心退<span>符合消费者保障法规，可申请7天无理由退货</span></li>
                                                <li>支持换货<span>符合消费者保障法规，本商品可申请换货服务</span></li>
                                                <li>正品保障<span>所有商品均有太平洋保险承包产品质量保证险</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="J_detailShare_wrap" class="pi_share_box r">
                                    <span class="jiaaa jiathis_style_24x24">
                                        <a href="javascript:void(0)" class="jiathis_button_weixin" title="分享到微信"><span
                                                class="jiathis_txt jtico jtico_weixin"></span></a>
                                        <a href="javascript:void(0)" mars_sead="m_account_invite_sina"
                                            class="share_button_tsina"></a>
                                    </span>
                                </div>
                        </div>`);
                        $(".J_num_act_add").on("click", function () {
                            // console.log($("#buyAmount")[0].innerText)
                            $("#buyAmount")[0].innerText = ($("#buyAmount")[0] .innerText)*1 + 1;
                        })
                         $(".J_num_act_reduce").on("click", function () {
                             $("#buyAmount")[0].innerText = ($("#buyAmount")[0].innerText) * 1 - 1;
                             if (($("#buyAmount")[0].innerText) * 1 <= 1) {
                                 $("#buyAmount")[0].innerText = 1;
                             }
                         })
                         var times;
                         $("#J_cartAdd_submit").on("click", function () {
                             clearTimeout(times);
                            //  console.log($(".show").attr("xid"))
                             $.ajax({
                                 type:"GET",
                                 url: "../api/goodsp.php?gid=" + $(".show").attr("xid") + "&shu=" + $("#buyAmount")[0].innerText,
                                  dataType: 'json',
                                    success: function (data) {
                                        console.log(data);
                                        if(data==0){
                                            times = setTimeout(function () {
                                                alert("成功加入购物车");
                                            },2000);
                                        }
                                    }
                                })
                         })
                         $("#miya").flyto({
                             item: '.show',
                             target: '.gouc',
                             move: '.big',
                             button: '#J_cartAdd_submit'
                         })
                         $(".small").children().on("click", function () {
                             $(".show .big img").attr("src", $(this).attr("src"));
                         })
                         //放大鏡
                         ;
                         (function ($) {
                             var XQ_bigimg = function (xq_big) {
                                 var self = this;
                                 this.xq_big = xq_big;
                                 this.width = xq_big.width();
                                 this.height = xq_big.height();
                                 this.top = xq_big.offset().top;
                                 this.left = xq_big.offset().left;
                                 this.pdiv = Math.floor(Math.random() * this.width * this.height);
                                 this.setting = {
                                     "pwidth": 300,
                                     "pheight": 200,
                                     "scale": 3,
                                     "margin_top": 50,
                                     "margin_left": 50,
                                     "pclass": ""
                                 }
                                 $.extend(this.setting, this.getSetting());
                                 this.imgsrc = this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
                                 this.xq_big.hover(function () {
                                     self.createPchild(self.pdiv);
                                     self.imgsrc = $(this).attr("src");
                                     self.createImg();
                                 }, function () {
                                     var pdiv = "#" + self.pdiv;
                                     $(pdiv).remove();
                                 });
                                 this.xq_big.mousemove(function (e) {
                                     var scrollTop = $(document).scrollTop();
                                     var scaleX = (e.clientX - self.left) / self.width; //处于左边部分的距离
                                     var scaleY = (e.clientY - self.top + scrollTop) / self.height; //处于顶部部分的距离
                                     self.updImg(scaleX, scaleY);
                                 });
                             }
                             XQ_bigimg.prototype = {
                                 createPchild: function (id) {
                                     var ele = document.createElement("div");
                                     var img = document.createElement("img");
                                     var scrollTop = $(document).scrollTop();
                                     $("body").append($(ele));
                                     $(ele).attr({
                                         'id': id
                                     }).css({
                                         'width': this.setting.pwidth + "px",
                                         'height': this.setting.pheight + "px",
                                         'position': 'fixed',
                                         'top': this.top + this.setting.margin_top - scrollTop,
                                         'left': this.left + this.width + this.setting.margin_left,
                                         'overflow': 'hidden'
                                     }).addClass(this.setting.pclass);
                                 },
                                 createImg: function () {
                                     var img = document.createElement("img");
                                     $(img).attr("src", this.imgsrc).css({
                                         'width': this.width * this.setting.scale,
                                         'height': this.height * this.setting.scale,
                                         'margin-top': '0px',
                                         'margin-left': '0px',
                                         'position': 'relative'
                                     });
                                     var pdiv = "#" + this.pdiv;
                                     $(pdiv).append($(img));
                                 },
                                 updImg: function (scaleX, scaleY) {
                                     var top = (scaleY * this.height * this.setting.scale) - (scaleY * this.setting.pheight);
                                     var left = (scaleX * this.width * this.setting.scale) - (scaleX * this.setting.pwidth);
                                     var pdiv = "#" + this.pdiv;
                                     $(pdiv).find("img").css({
                                         'top': -top + "px"
                                     });
                                     $(pdiv).find("img").css({
                                         'left': -left + "px"
                                     });
                                 },
                                 getSetting: function () {
                                     var setting = this.xq_big.attr("setting"); //节点属性配置参数
                                     if (setting && setting != "") {
                                         return $.parseJSON(setting);
                                     } else {
                                         return {};
                                     }
                                 }
                             };
                             XQ_bigimg.init = function ($ele) {
                                 var _this_ = this;
                                 $ele.each(function () {
                                     new _this_($(this));
                                 });
                             }
                             window['XQ_bigimg'] = XQ_bigimg;
                         })(jQuery)
                         $(function () {
                             XQ_bigimg.init($("[xq_big='true']"));
                         });
                }else{
                     data.forEach(function (item) {
                         $(".w1004").html(` <div class="show clearfix" xid ="${item.id}">
                            <div class="left l rel fgow" style="position: relative;">
                                <!-- （大图）默认图 -->
                                <div class="big rel"><img
                                        src = "../images/images/${item.imgaes}"
                                        style="width: 400px; height: 400px;" class="fimg" xq_big="true" setting='{"pwidth":400,"pheight":400,"margin_top":0,"margin_left":0}'>
                                </div>
                                <!-- （缩略图）上展图 -->
                                <!-- <div class="make"> -->
                                    <div class="small">
                                        <img src="../images/images/1076433_normal_3_cdc68ccb.jpg" alt=""
                                            class="change_pic select_small_img">
                                        <img src="../images/images/1076449_normal_3_4721f92c.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1076458_normal_3_6eec71fe.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1108884_normal_3_8c17128d.jpg" alt="" class="change_pic">
                                        <img src="../images/images/1204109_normal_3_e68f2477.jpg" alt="" class="change_pic mr0">
                                    </div>
                                </div>
                                <div class="right l right-groupon" style="position: relative;">
                                    <div class="M_productInfo">
                                        <div class="country fz14 mb10 clearfix">
                                            <div class="l">
                                            </div>
            
                                            <input type="hidden" id="share_pic" value="">
                                            <input type="hidden" id="share_name"
                                                value="">
                                        </div>
                                        <div class="brand fz14 mb10">
                                            <!--思源品牌，隐藏品牌-->
                                            <a href="" target="_blank">
                                                知识出版社 </a>
                                            <span>${item.title}</span>
                                        </div>
                                        <div class="titlecon clearfix mb10 fz14">
                                            <div class="left yahei l">
                                                <input type="hidden" name="item_id" id="item_id" value="3086361"
                                                    readonly="readonly">
                                                <a href="/list-.html" class="pink"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pi_price_box">
                                        <div class="price_info"><span class="tit_txt yahei">售价</span><span class="pbox_price"><i
                                                    class="pbox_yen">¥</i><em id="item_price">${item.place}</em></div>
                                        <div id="i_youhui_bak" class="i_youhui clearfix">
                                            <dt class="num_name tit_txt yahei" style="float:left;">优惠</dt>
                                            <dt class="num_txt" style="float:left;"><a href="/promotion-85123.html">
                                                    <div class="markwarp"><i
                                                            class="mark-manzeng">限时秒杀</i>每人限购5件,总限购500件,超出按照原价计算</div>
                                                </a><a href="/promotion-73448.html">
                                                </a></dt>
                                        </div>
                                        <div class="popup_mask"></div>
                                    </div>
                                    <div class="pi_attr_box">
                                        <div class="clearfix discount_f"></div>
                                        <input type="hidden" value="add" name="act">
                                        <input type="hidden" value="" name="client_time">
                                        <div id="popcomSkuArea" class="color"></div>
                                        <input type="hidden" value="" id="item_size" name="size" readonly="readonly">
                                        <input type="hidden" value="" id="sku_id" readonly="readonly">
                                        <dl id="J_num_select" class="i_num clearfix">
                                            <dt class="num_name tit_txt fz14">数量</dt>
                                            <dd class="num_box">
                                                <span class="num_reduce num_reduce_disabled J_num_act_reduce"></span>
                                                <em class="num_input" id="buyAmount">${item.page}</em>
                                                <span class="num_add J_num_act_add"></span>
                                            </dd>
                                        </dl>
                                        <!--预售商品提示-->
                                        <div class="clearfix cartAdd_submit hide" style="display: block;">
                                            <div class="button_f" id="itemProcess">
                                                <a href="javascript:void(0)" class="btn_07 fz14" id="J_cartAdd_submit">加入购物车</a>
                                                <p id="sepcailNotice"></p>
                                            </div>
                                        </div>
                                        <div class="pbox_pms yahei clearfix mb10">
                                            <ul>
                                                <li>非自营<span>本商品由商家发货并提供售后服务</span></li>
                                                <li>包邮<span>本商品支持包邮，除港澳台和部分偏远地区(如新疆、青海、西藏等)外，您无需承担运费</span></li>
                                                <li>7天放心退<span>符合消费者保障法规，可申请7天无理由退货</span></li>
                                                <li>支持换货<span>符合消费者保障法规，本商品可申请换货服务</span></li>
                                                <li>正品保障<span>所有商品均有太平洋保险承包产品质量保证险</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="J_detailShare_wrap" class="pi_share_box r">
                                    <span class="jiaaa jiathis_style_24x24">
                                        <a href="javascript:void(0)" class="jiathis_button_weixin" title="分享到微信"><span
                                                class="jiathis_txt jtico jtico_weixin"></span></a>
                                        <a href="javascript:void(0)" mars_sead="m_account_invite_sina"
                                            class="share_button_tsina"></a>
                                    </span>
                                </div>
                        </div>`);
                     })
                       $("#miya").flyto({
                           item: '.show',
                           target: '.gouc',
                           move: '.big',
                           button: '#J_cartAdd_submit'
                       })
                       $(".small").children().on("click", function () {
                           $(".show .big img").attr("src", $(this).attr("src"));
                       })
                       //放大鏡
                       ;
                       (function ($) {
                           var XQ_bigimg = function (xq_big) {
                               var self = this;
                               this.xq_big = xq_big;
                               this.width = xq_big.width();
                               this.height = xq_big.height();
                               this.top = xq_big.offset().top;
                               this.left = xq_big.offset().left;
                               this.pdiv = Math.floor(Math.random() * this.width * this.height);
                               this.setting = {
                                   "pwidth": 300,
                                   "pheight": 200,
                                   "scale": 3,
                                   "margin_top": 50,
                                   "margin_left": 50,
                                   "pclass": ""
                               }
                               $.extend(this.setting, this.getSetting());
                               this.imgsrc = this.setting.bigImg ? this.setting.bigImg : xq_big.attr("src");
                               this.xq_big.hover(function () {
                                   self.createPchild(self.pdiv);
                                   self.imgsrc = $(this).attr("src");
                                   self.createImg();
                               }, function () {
                                   var pdiv = "#" + self.pdiv;
                                   $(pdiv).remove();
                               });
                               this.xq_big.mousemove(function (e) {
                                   var scrollTop = $(document).scrollTop();
                                   var scaleX = (e.clientX - self.left) / self.width; //处于左边部分的距离
                                   var scaleY = (e.clientY - self.top + scrollTop) / self.height; //处于顶部部分的距离
                                   self.updImg(scaleX, scaleY);
                               });
                           }
                           XQ_bigimg.prototype = {
                               createPchild: function (id) {
                                   var ele = document.createElement("div");
                                   var img = document.createElement("img");
                                   var scrollTop = $(document).scrollTop();
                                   $("body").append($(ele));
                                   $(ele).attr({
                                       'id': id
                                   }).css({
                                       'width': this.setting.pwidth + "px",
                                       'height': this.setting.pheight + "px",
                                       'position': 'fixed',
                                       'top': this.top + this.setting.margin_top - scrollTop,
                                       'left': this.left + this.width + this.setting.margin_left,
                                       'overflow': 'hidden'
                                   }).addClass(this.setting.pclass);
                               },
                               createImg: function () {
                                   var img = document.createElement("img");
                                   $(img).attr("src", this.imgsrc).css({
                                       'width': this.width * this.setting.scale,
                                       'height': this.height * this.setting.scale,
                                       'margin-top': '0px',
                                       'margin-left': '0px',
                                       'position': 'relative'
                                   });
                                   var pdiv = "#" + this.pdiv;
                                   $(pdiv).append($(img));
                               },
                               updImg: function (scaleX, scaleY) {
                                   var top = (scaleY * this.height * this.setting.scale) - (scaleY * this.setting.pheight);
                                   var left = (scaleX * this.width * this.setting.scale) - (scaleX * this.setting.pwidth);
                                   var pdiv = "#" + this.pdiv;
                                   $(pdiv).find("img").css({
                                       'top': -top + "px"
                                   });
                                   $(pdiv).find("img").css({
                                       'left': -left + "px"
                                   });
                               },
                               getSetting: function () {
                                   var setting = this.xq_big.attr("setting"); //节点属性配置参数
                                   if (setting && setting != "") {
                                       return $.parseJSON(setting);
                                   } else {
                                       return {};
                                   }
                               }
                           };
                           XQ_bigimg.init = function ($ele) {
                               var _this_ = this;
                               $ele.each(function () {
                                   new _this_($(this));
                               });
                           }
                           window['XQ_bigimg'] = XQ_bigimg;
                       })(jQuery)
                       $(function () {
                           XQ_bigimg.init($("[xq_big='true']"));
                       });
                        $(".J_num_act_add").on("click", function () {
                            $("#buyAmount")[0].innerText = ($("#buyAmount")[0].innerText) * 1 + 1;
                        })
                         $(".J_num_act_reduce").on("click", function () {
                             $("#buyAmount")[0].innerText = ($("#buyAmount")[0].innerText) * 1 - 1;
                             if (($("#buyAmount")[0].innerText) * 1<=1){
                                 $("#buyAmount")[0].innerText = 1;
                             }
                         })
                         var times;
                         $("#J_cartAdd_submit").on("click", function () {
                              clearTimeout(times);
                              //  console.log($(".show").attr("xid"))
                              $.ajax({
                                  type: "GET",
                                  url: "../api/goodsp.php?gid=" + $(".show").attr("xid") + "&shu=" + $("#buyAmount")[0].innerText,
                                  dataType: 'json',
                                  success: function (data) {
                                      console.log(data);
                                      if (data == 0) {
                                          times = setTimeout(function () {
                                              alert("成功加入购物车");
                                          }, 2000);
                                      }
                                  }
                              })
                         })
                }
            }
        })
    }
})