<template>
  <div>
    <img v-lazy="pic1" alt="艺术涂料招商加盟">

    <div style="padding:170px 0px">

      <titleMore type="default"
                 title="中国涂料行业未来10年有超过60000亿的巨大市场"
                 subtitle="艺术涂料行业前景分析"
                 info="Prospect Analysis of Art Paint Industry"
                 description="油漆涂料代理，选择中国涂料知名品牌百事得。涂料行业掀起新一轮财富风暴，
油漆涂料加盟致富的三大利好趋势：">
      </titleMore>
      <el-row class="margin-top-larger container">
        <el-col :md="14">
          <div class="background-primary-transparenter padding padding-top-small padding-bottom-small">
            <div class="color-primary float-left padding-right" style="font-size: 86px; line-height: 1;">
              1
            </div>
            <div>
              <h3>中国是全球最大的涂料消费市场</h3>
              <p>
                中国拥有14亿人口，人均收入不断提高，涂料需求不断增加
                中国人均涂料消费不到3公斤，发达国家人均涂料消费达到7-10公斤
              </p>
            </div>
          </div>


          <div class="background-primary-transparenter padding padding-top-small padding-bottom-small margin-top">
            <div class="color-primary float-left padding-right" style="font-size: 86px; line-height: 1;">
              2
            </div>
            <div>
              <h3>目前中国每年有5600亿涂料消费市场，并以成倍速度在扩大</h3>
              <p>
                中国每年住房竣工面积约20亿平方，内外墙涂料消费将达到3600亿
                每年2万亿的家具市场将消费2000亿的家具油漆
              </p>
            </div>
          </div>

          <div class="background-primary-transparenter padding padding-top-small padding-bottom-small margin-top">
            <div class="color-primary float-left padding-right" style="font-size: 86px; line-height: 1;">
              3
            </div>
            <div>
              <h3 style="text-overflow:ellipsis;">中国经济政策的利好，为油漆、涂料行业开辟无限想象的市场</h3>
              <p>
                西部大开发给涂料产业带来全新机遇 <br>
                新农村建设、保障性住房工程拉动涂料市场
              </p>
            </div>
          </div>

        </el-col>
        <el-col :md="10" class="hidden@xs">
          <img v-lazy="pic2" alt="">
        </el-col>
      </el-row>
    </div>

    <img v-lazy="pic3" alt="艺术油漆加盟">

    <!-------------------------------------------------->
    <div style="padding:170px 0 0">
      <titleMore type="default"
                 title="品牌优势 信誉度高 合作企业众多"
                 subtitle="选择BEST的理由一"
                 info="There are many cooperative enterprises with high reputation and brand advantage"
                 description="赢在起跑线 选择是关键 百事得与国内众多知名企业合作,信誉良好">
      </titleMore>
      <img v-lazy="pic4"
           class="margin-top-largest"
           alt="艺术涂料招商加盟">

    </div>
    <!-------------------------------------------------->

    <div style="padding:170px 0"
         :style="{background:`url(${bgRed})`}"
    >
      <titleMore title="全程紧密扶持成功一路相伴"
                 subtitle="选择BEST的理由二"
                 info="Closely support the success along the way"
                 description="百事得9大扶持,步步稳扎稳打,登财富巅峰"
                 type="inverse"
      >
      </titleMore>
      <div class="margin-top-largest text-center container">

        <baseIcon v-for="item in icon" :key="item.title"
                    :icon="item.icon"
                    :title="item.title"
                    size="84"
                    type="white"
                    class="margin-small"></baseIcon>


      </div>

    </div>

    <!-------------------------------------------------->


    <div style="padding:170px 0 70px">
      <titleMore type="default"
                 title="产品品质高 百事得开创艺术涂料的新时代"
                 subtitle="选择BEST的理由三"
                 info="High Quality PepsiCo Creates a New Era of Art Paint"
                 description="2017年6月北京新闻发布会，隆重推出百事得耐擦洗硅藻泥（5000次擦洗，表面无损伤，甲醛净化率高于行业标准80%以上），改写了硅藻泥易掉粉的行业痛点，
被网易、新浪、建材报等数十家媒体报道。耐擦洗硅藻泥专利申请号：2017103698413（实审阶段）净化空气/吸音降噪/呼吸调湿/保温隔热/墙面自洁/消除异味
/防火阻燃/保护视力">
      </titleMore>
      <img v-lazy="pic5"
           class="margin-top-largest"
           alt="艺术涂料招商加盟">

    </div>

    <!-------------------------------------------------->

    <div style="padding:170px 0"
         :style="{background:`url(${bgRed})`}"
    >
      <titleMore title="百事得影响媒体大力推广"
                 subtitle="选择BEST的理由四"
                 info="PepsiCo's influence on media promotion"
                 description="百事得投资千万巨资,几乎覆盖线上线下所有媒体"
                 type="inverse"
      >
      </titleMore>
      <div class="margin-top-largest text-center container">

        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="item in $store.state.componentDatas['el-carousel']" :key="item.image">
            <img v-lazy="item.image" alt="">
          </el-carousel-item>
        </el-carousel>

      </div>

    </div>


    <!-------------------------------------------------->


    <div style="padding:170px 0 70px">
      <titleMore type="default"
                 title="高品质店铺装修,百事得到哪，哪就是风景线"
                 subtitle="选择BEST的理由五"
                 info="High-quality shop decoration, where Pepsi get, which is the scenic line"
                 description="国内加盟店铺已超过50家">
      </titleMore>
      <div class="margin-top-largest">
        <picScale :data="$store.state.componentDatas.picScale">

        </picScale>

      </div>

    </div>
    <!-------------------------------------------------->

    <div style="padding:170px 0"
         :style="{background:`url(${bgRed})`}"
    >
      <titleMore title="低风险 高收益 重新定义创业"
                 subtitle="选择百事得的理由六"
                 info="Redefining entrepreneurship with low risk and high return"
                 description="金山就在眼前 财富不会等待,9大扶持,步步稳扎稳打,登财富巅峰"
                 type="inverse"
      >
      </titleMore>
      <div class="margin-top-largest  container">
        <textList></textList>

      </div>

    </div>


    <!-------------------------------------------------->


    <div style="padding:170px 0 ">
      <titleMore type="default"
                 title="中国好导师 全国艺术涂装 培训学院先行者"
                 subtitle="选择百事得的理由七"
                 info="China's Good Tutor, Pioneer of National Academy of Art Painting Training"
      >
      </titleMore>
      <p class=" padding-top container" style="white-space: pre-line; padding-left:120px">
        <span class="color-black">创业中遇到的问题:</span>
        不会开店?
        总部专业选址、免费设计、全套Vi、开业指导…
        不会施工?
        总部培训，包吃住包学会；每月还有各区域落地技术培训；
        不懂业务?
        小区推广、渠道、促销活动，卖场联盟大区经理实地支持，“商学院”定期各项营销培训；
        移动商学院让你随时随地学习；
        不懂推广?
        总部巨额广告费用支持；广告方案、广告设计全免费；
        没管理经验?
        总部整店模式输出，薪酬、销售、营销管理表格化；
        没有客源?
        网络平台，线上线下扶持订单不断；
        不懂产品?
        我们与国内5家高校合作与30多位名师共同开发新品
      </p>
<!--      <div class="margin-top-largest">-->
<!--        <pictextThree :data="$store.state.componentDatas.pictextThree"></pictextThree>-->
<!--      </div>-->

    </div>
    <!-------------------------------------------------->

    <div style="padding:170px 0"
         :style="{background:`url(${bgRed})`}"
    >
      <titleMore title="加盟流程"
                 subtitle="BEST招商加盟流程篇"
                 info="BEST Merchants Joining Process Chapter"
                 description="为你带来跨时空的财富之源"
                 type="inverse"
      >
      </titleMore>
      <div class="margin-top-largest text-center container">

        <base-icon v-for="(item,index) in icon2"
                    :icon="item.icon"
                    :key="(index+1)+'.'+item.title"
                    :title="(index+1)+'.'+item.title"
                    size="84"
                    type="white"
                    class="margin-small baseIcon"
        >


        </base-icon>
      </div>
    </div>
    <!-------------------------------------------------->
    <div class="margin-top-largest">
      <pictextContact :data="$store.state.componentDatas.pictextContact" class="hidden@xs"></pictextContact>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        icon: [
          {icon: 'xiangfuchi', title: '开业支持'},
          {icon: 'thin-_factory_wo', title: '一站供货'},
          {icon: 'peixun', title: '专业培训'},
          {icon: 'tuiguang', title: '营销推广'},
          {icon: 'kefu', title: '服务支持'},
          {icon: 'shouhou', title: '完善售后'},
          {icon: 'wuliu', title: '高效物流'},
        ],
        icon2: [
          {icon: 'kefu', title: '加盟咨询'},
          {icon: 'gongsi', title: '总部考察'},
          {icon: 'shouhou', title: '资格审核'},
          {icon: 'hetong', title: '签订合同'},
          {icon: 'qian', title: '缴纳费用'},
          {icon: 'peixun', title: '总部培训'},
          {icon: 'coordinates', title: '选址装修'},
          {icon: 'wuliu', title: '物料配送'},
          {icon: 'youqi', title: '开业准备'},
          {icon: 'shop', title: '店面开业'},
          {icon: 'jishuzhichizhichizhinengzhinengfuwufuwuke', title: '营业扶持'},
        ],
        pic1: require('@/assets/pic/join_banner.jpg'),
        pic2: require('@/assets/pic/join_money.png'),
        pic3: require('@/assets/pic/join1.jpg'),
        pic4: require('@/assets/pic/join2.png'),
        pic5: require('@/assets/pic/join3.jpg'),
        bgRed: require('@/assets/pic/bg_red.jpg')
      }
    }
  }

</script>
<style>
  .baseIcon {
    position: relative
  }

  .baseIcon:after {
    position: absolute;
    content: '>';
    left: 120%;
    top: 35px;
  }

  .baseIcon:last-of-type:after {
    content: '';
  }

</style>
