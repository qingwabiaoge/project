<template>

  <div>



    <div class="margin-top container padding " style="background: white">
     <h1 style="text-align: center ; padding-bottom: 20px">产品介绍</h1>
      <p>
        中山市百事得化工有限公司成立于2005年，历经多年的蓬勃发展，已成为一家集研发、生产、销售为一体的大型化工集团。百事得凭借雄厚的实力和过硬的技术，在坚持走专业化发展道路的基础上，努力进取，开拓创新，现已拥有四大品牌：百事得、典艺、依家、万东，公司产品线丰富，有：

      </p>

      <el-table
        :data="tableData"
        class="margin-top"
        style="width: 100% ">
        <el-table-column
          prop="name"
          label="产品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="use"
          label="用途"
          width="180">
        </el-table-column>
        <el-table-column
          prop="image"
          label="产品展示">
          <template v-slot="scope">
            <img :src="scope.row.image" alt="" style="width: 150px;">
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
  import a1 from '../assets/picture/a1.gif'
  import a2 from '../assets/picture/a2.gif'
  import a3 from '../assets/picture/a3.gif'
  import a4 from '../assets/picture/a4.gif'
  import a5 from '../assets/picture/a5.gif'
  import a6 from '../assets/picture/a6.gif'
  import a7 from '../assets/picture/a7.gif'

  export default {
    data() {
      return {
        tableData: [{
          name: '家具漆',
          use: '适用于木器、竹器家具表面专用',
          image: a1
        }, {
          name: '水性木器漆',
          use: '适用于门、窗、橱柜等各种木器，凉亭、木棚、走廊及户外木质设施的涂装',
          image: a2
        }, {
          name: '氟碳漆',
          use: '氟碳漆是以氟树脂为主要成分的固化型双组份氟碳漆，可用于多种涂层和基材的罩面保护',
          image:a3
        }, {
          name: '固化剂',
          use: '固化剂又名硬化剂、熟化剂或变定剂，是一种增进或控制固化反应的物质或混合物',
          image: a4
        },
          {
            name: '瓷砖背胶',
            use: '瓷砖背胶用于玻化砖的背面处理，有效提高玻化砖与粘接材料之间强度，解决玻化砖常见的空鼓、脱落问题',
            image: a5
          },
          {
            name: '防水乳液',
            use: '适用于卫生间、楼顶防渗透使用',
            image: a6
          },
          {
            name: '环氧地坪漆',
            use: '环氧地坪漆\t环氧地坪漆可分为溶剂型和无溶剂型两种，溶剂型在生产、施工划入固化剂过程中会排放一定的挥发性有机物，但成本较低，而无溶剂符合环保理念，采用整体聚气雾面层',
            image: a7
          }]
      }
    }
  }
</script>
