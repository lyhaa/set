      $.ajax({
          type: 'GET',
          url: "../api/goodcha.php",
          dataType: 'json',
          success: function (data) {
              for (var i = 0; i < data.length; i++) {
                  data[i].forEach(item => {
                            $(".cl_con")[0].innerHTML += `<div class="cl_promotion promotion_84676" data-id="${item.id}">
                                              <div class="cl_items promotion ">
                                                  <!-- loop -->
      
                                                  <div class="clearfix"></div>
                                                  <div class="gooditem gooditems_155806156007372  clearfix " style="border-bottom: none;">
                                                      <div class="it_mck checked"><input gf="0" id="brand01_155806156007372"
                                                              name="productcheck" class="mck" data-checktype="3" type="checkbox"
                                                              checked="" cart-sku="2900750" value="155806156007372"></div>
                                                      <!-- 20160113增加活动区域 begin lz -->
                                                      <div class="it_img">
                                                          <a href=""
                                                              title="五个小卡车鼻子纸3层40抽x10包柔软便携式保湿柔纸巾抽纸面巾纸" target="_blank">
                                                              <span class="active-icon">
                                                                  限时秒杀 </span>
                                                              <!-- <img src="" alt="" > -->
                                                              <img src="../images/images/${item.imgaes}">
                                                          </a>
                                                      </div>
                                                      <!-- 20160113增加活动区域 end lz -->
                                                      <div class="it_des">
                                                          <div class="dtz">
                                                              <img alt="" src="/resources/images/btntz.png">
                                                          </div>
                                                          <p class="tzname"><a href="###"
                                                                  title="五个小卡车鼻子纸3层40抽x10包柔软便携式保湿柔纸巾抽纸面巾纸" target="_blank">
                                                                  ${item.title}</a></p>
                                                          <p class="goods_select">
                                                              <span class="color9">套装</span>
                                                          </p>
                                                          <p class="preSale_txt">
                                                              <!--预售商品提示-->
                                                          </p>
                                                      </div>
                                                      <div class="it_size" style="display:none;">
                                                          SINGLE </div>
                                                      <!-- <div class="it_price">
                                                          <p class="goodsp" data-goodsp="89.00">89.00</p>
                                                          <p class="goodmp">300.00</p>
                                                      </div> -->
                                                      <div class="it_num" buy_type="2">
                                                          <div class="dp_bt">
                                                              <span class="dpcom dp_jian" data-fm="cart_home" id="cart_deduct"></span>
                                                              <input  name="count" type="text" class="dp_num" maxlength="2" value=""  warehouse_id="" >
                                                              <span class="dpcom dp_jia" id="cart_add" data-fm="cart_home"
                                                                  data-max=""></span>
                                                              <span class="xiangou pink seckill_limit"
                                                                  style="float:left;display:inline-block;padding-top:8px;line-height:1.5;width: 100%;display:block"></span>
      
                                                          </div>
                                                          <div class="limit_buy" style="padding-top: 8px;color:#fa4b9b;">
                                                          </div>
                                                      </div>
                                                      <div class="it_total subTotal">
                                                          <span class="item_fee" >
                                                              ¥${item.place}
                                                          </span>
                                                          <br>
                                                          <span class="tax"></span>
                                                      </div>
      
                                                      <div class="it_operate">
                                                          <p class="sc"><a href="javascript:;" class="delete">删除</a></p>
                                                          <p class="xgyh">
                                                              <!-- 排除秒杀和包税活动 -->
      
                                                              <!-- 可选活动列表 -->
                                                          </p>
                                                          <div style="display: none;" class="hidden_promotion_list_155806156007372">
                                                          </div>
      
                                                          <p></p>
                                                      </div>
                                                      <div class="line" style="height: 80px;"></div>
                                                      <!--蜜豆抵扣 star-->
                                                      <!--蜜豆抵扣 end-->
                                                  </div>
                                                  <!--end loop-->
      
                                              </div>
                                          </div>`;
                                        //   console.log($(".dp_num").val());
                                        console.log($(".cl_promotion").attr("data-id"));
                                        });
                                    }
                                    $.ajax({
                                        type: 'GET',
                                        url: "../api/goodg.php",
                                        dataType: 'json',
                                        success: function (data) {
                                            data.forEach(function(item){
                                                // console.log(item)
                                                $(".dp_num").val(item.countt);
                                            })
                                        }
                                    })
          }
      })