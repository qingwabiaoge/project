<template>
  <!--新增商品-->
  <el-dialog
    :class="$style.uniform"
    :title="'编辑 '+data.title||data.model"
    :visible.sync="visible"
    width="90%"
    :before-close="close">

    <!--ref一定要写到这里 form的外层-->
    <el-form :model="data" :rules="rules" ref="form">
      <h4><span v-if="data.model">推广字段</span><span v-else>基本字段</span>:</h4>
      <section>

        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input type="text" v-model="data.title" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="name"
                      v-if="data.model==='component'"
                      :label-width="formLabelWidth"
                      prop="name"
        >
          <el-input type="text" v-model="data.name" auto-complete="off" :disabled="!$isdev"></el-input>
        </el-form-item>

        <el-form-item
          v-if="data.model==='produce'||data.model==='article'"
          label="栏目"
          :label-width="formLabelWidth" prop="category">
          <el-select v-model="data.category" placeholder="请选择">
            <el-option
              v-for="item in data.model==='article'?articleCategory
                                              :data.model==='produce'?produceCategory:''"
              :key="item.title"
              :label="item.title"
              :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="副标题" :label-width="formLabelWidth" prop="">
          <el-input type="text" v-model="data.subtitle" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item v-if="data.model==='component'" label="按钮文字" :label-width="formLabelWidth" prop="">
          <el-input type="text" v-model="data.button" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input type="text" v-model="data.info" auto-complete="off"
                    placeholder="一句话简介"></el-input>
        </el-form-item>


        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.description"
                    auto-complete="off"
                    placeholder="请写一个通顺的句子最好句中包含seo标题内容">

          </el-input>
        </el-form-item>

        <el-form-item v-if="data.model!=='global'"
                      label="排序"
                      :label-width="formLabelWidth">
          <el-input type="number"
                    :min="1"
                    v-model.number="data.sort"
                    placeholder="数字越大排序越靠前"
                    auto-complete="off">

          </el-input>

        </el-form-item>

      </section>

      <h4 v-if="/(contact|联系)/i.test(data.title)">联系方式</h4>

      <section v-if="/(contact|联系)/i.test(data.title)">

        <el-form-item label="电话"
                      :label-width="formLabelWidth"
                      prop="tel">
          <!--data.name 数据-->
          <el-input v-model="data.tel"
                    type="textarea"
                    placeholder="请输入电话号码">
          </el-input>
        </el-form-item>
        <el-form-item label="传真"
                      :label-width="formLabelWidth"
                      prop="fax">
          <!--data.name 数据-->
          <el-input v-model="data.fax"
                    placeholder="请输入传真号码">
          </el-input>
        </el-form-item>

        <el-form-item label=" 公众号二维码"
                      :label-width="formLabelWidth"
                      prop="qcode"
        >
          <upload v-model="data.qcode"
                  style="width: 300px">

          </upload>
        </el-form-item>

        <el-form-item label="QQ"
                      :label-width="formLabelWidth"
                      prop="qq">
          <!--data.name 数据-->
          <el-input v-model="data.qq"
                    type="textarea"
                    placeholder="请输入qq号码">
          </el-input>
        </el-form-item>

        <el-form-item label="邮箱"
                      :label-width="formLabelWidth">
          <!--data.name 数据-->
          <el-input v-model="data.email"
                    :label-width="formLabelWidth"
                    placeholder="请输入qq号码">
          </el-input>
        </el-form-item>


        <el-form-item label="地址"
                      :label-width="formLabelWidth"
                      prop="address">
          <!--data.name 数据-->
          <el-input v-model="data.address"
                    placeholder="请输入地址">
          </el-input>
        </el-form-item>


        <el-form-item label="地图"
                      :label-width="formLabelWidth"
        >

          <upload v-model="data.map"
                  style="width: 300px">
          </upload>
        </el-form-item>
      </section>


      <h4 v-if="data.model==='produce'">产品字段:</h4>
      <section v-if="data.model==='produce'">
        <el-form-item label="原价" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.maxPrice" :min="1" auto-complete="off"></el-input>
        </el-form-item>

        <el-tooltip class="item" effect="dark"
                    :content="(data.price*10/data.maxPrice).toFixed(2).toString()+'折'" placement="right">
          <el-form-item label="实价" :label-width="formLabelWidth" prop="">
            <el-input type="number" v-model.number="data.price" :min="1" auto-complete="off"></el-input>
          </el-form-item>
        </el-tooltip>


        <el-form-item label="数量" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.number" :min="1" auto-complete="off"></el-input>
        </el-form-item>


        <el-form-item label="材质" :label-width="formLabelWidth">
          <el-input type="text" v-model="data.material" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="重量 kg" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.weight" :min="1" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="尺寸" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.size" auto-complete="off" :min="1"></el-input>
        </el-form-item>
        <el-form-item label="颜色" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.color" auto-complete="off" placeholder="多个颜色请换行"></el-input>
        </el-form-item>

        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input type="number" v-model.number="data.suk" auto-complete="off" :min="1"></el-input>
        </el-form-item>

        <el-form-item label="销售量" :label-width="formLabelWidth">
          <el-input type="number" v-model.number="data.sales" auto-complete="off" :min="1"></el-input>
        </el-form-item>
      </section>

      <h4 v-if="data.model==='article'||data.model==='produce'">
        推广字段
      </h4>
      <section v-if="data.model==='article'||data.model==='produce'">
        <el-form-item label="百度标题"
                      :label-width="formLabelWidth"
                      prop="seotitle">
          <el-input type="text"
                    v-model="data.seotitle" a
                    uto-complete="off"
                    placeholder="多个标题请用_分开">
          </el-input>
        </el-form-item>

        <el-form-item
          label="关键字"
          :label-width="formLabelWidth"
        >
          <el-input type="text"
                    v-model="data.keyword"
                    auto-complete="off"
                    placeholder="多个关键字之间请用，分开">

          </el-input>
        </el-form-item>
        <el-form-item label="浏览量"
                      :label-width="formLabelWidth">
          <el-input type="number"
                    v-model.number="data.pv"
                    auto-complete="off">

          </el-input>
        </el-form-item>

      </section>


      <h4> 图片字段</h4>

      <section>

        <el-form-item v-if="data.model==='produce'"
                      label=" 缩略图"
                      prop="images">

          <upload-list :images.sync="data.images"
                       :limit="5">

          </upload-list>

        </el-form-item>


        <el-form-item v-else
                      :label="data.model==='global'?'LOGO':'缩略图'"
        >

          <upload v-model="data.image">

          </upload>
        </el-form-item>

        <el-form-item v-if="data.isCategory===true"
                      label="栏目内页横幅图"
        >

          <upload v-model="data.cimage">

          </upload>
        </el-form-item>


        <el-form-item label="图标"
                      v-if="data.model==='component'"
        >

          <upload v-model="data.icon">

          </upload>
        </el-form-item>

        <el-form-item label="背景"
                      v-if="data.model==='component'||data.model==='global'"
        >

          <upload v-model="data.background">

          </upload>
        </el-form-item>
        <el-form-item label="背景颜色"
                      v-if="data.model==='component'||data.model==='global'"
        >

          <el-color-picker v-model="data.bg" show-alpha :predefine="predefineColors"></el-color-picker>
        </el-form-item>


      </section>
      <h4 v-if="data.model==='component'"> 超链接</h4>

      <section v-if="data.model==='component'">
        <el-form-item label="超链接" :label-width="formLabelWidth">
          <el-input type="text" v-model="data.href" auto-complete="off"></el-input>
        </el-form-item>

      </section>


      <h4 v-if="data.model!=='global'"> 开关</h4>
      <section v-if="data.model!=='global'">

        <el-form-item v-if="data.model==='component'">
          <el-tooltip class="item" effect="dark" content="栏目是组件的一种,栏目级组件带有页面,可通过导航链接访问栏目页面" placement="top-start">

            <el-switch
              v-model="data.isCategory"
              active-text="在栏目展示"
              inactive-text="不展示"
              class="uk-padding-left-md"
            >
            </el-switch>
          </el-tooltip>
        </el-form-item>

        <el-form-item>
          <el-switch
            v-if="data.model==='component'"
            v-model="data.show"
            active-text="在页面中显示模块"
            inactive-text="不显示"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>


        <el-form-item>
          <el-switch
            v-if="data.model==='produce'||data.model==='article'"
            v-model="data.flag"
            active-text="不推荐"
            inactive-text="推荐到首页"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>


        <el-form-item>
          <el-switch
            v-if="data.model==='article'||data.model==='produce'"
            v-model="data.publish"
            active-text="发布"
            inactive-text="存草稿"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>
      </section>

      <h4 v-if="data.model!=='global'&&data.isCategory!==false">
        <span v-if="data.isCategory===true">
          栏目内页内容
        </span>
      </h4>

      <!-- undifine!==false-->
      <section v-if="data.model!=='global'&&data.isCategory!==false">


        <vue-editor id="editor"
                    useCustomImageHandler
                    @image-added="addImage"
                    :class="$style.editor"
                    v-model="data.content">
        </vue-editor>

      </section>

      <section v-if="data.model==='global'">

        <el-form-item label="主机地址" :label-width="formLabelWidth">
          <el-input type="text"
                    v-model.number="data.host"
                    auto-complete="off">

          </el-input>
        </el-form-item>

        <el-form-item label="产品分页" :label-width="formLabelWidth">
          <el-input type="number"
                    v-model.number="data.producePagerNumber"
                    auto-complete="off">

          </el-input>
        </el-form-item>


        <el-form-item label="新闻分页" :label-width="formLabelWidth">
          <el-input type="number"
                    v-model.number="data.articlePagerNumber"
                    auto-complete="off">

          </el-input>
        </el-form-item>

        <el-form-item label="备案号"
                      :label-width="formLabelWidth"
                      prop="beian">
          <!--global.name 数据-->
          <el-input v-model="data.beian"
                    placeholder="请输入备案号">
          </el-input>
        </el-form-item>
      </section>

      <section v-if="data.model==='global'">
        <el-form-item label="字段"
                      :label-width="formLabelWidth"

                      prop="beian">
          <!--global.name 数据-->
          <el-input v-for="(item,key) in data.ex"
                    v-model="item[key]"
                    style="margin-bottom: 10px"
                    placeholder="请输入字段内容"
                    :key="'ex'+key">
            <template slot="prepend">{{item.key}}</template>
          </el-input>

          <el-button @click="data.ex.push({})">新增字段</el-button>
        </el-form-item>
      </section>
    </el-form>
    <div v-if="$isdev">{{data}}</div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false;">取 消</el-button>

    <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>


  import uploadList from '../uploadList/index'
  import upload from '../uploadSimple/index'
  import mapMixin from '@/mixins/page-mixin'

  export default {
    components: {
      upload,
      uploadList
    },
    data() {
      return {
        formLabelWidth: '80px',
        visible: false,
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(0,0,0,0.8)',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        rules: {
          title: [
            {required: true, message: '请输入名称或标题', trigger: 'blur'}
          ],
          picture: [
            {required: true, message: '请上传缩略图', trigger: 'blur'}
          ],
          image: [
            {required: true, message: '请上传缩略图!', trigger: 'change'}
          ],
          images: [
            {required: true, message: '请上传缩略图!', trigger: 'change'}
          ],

          href: [
            {required: true, message: '请输入链接地址', trigger: 'change'}
          ],
          position: [
            {required: true, message: '请选择投放位置', trigger: 'change'}
          ],

          content: [
            {required: true, message: '你还没有编辑商品详情内容哦', trigger: 'blur'}
          ],
          beian: [
            {required: true, message: '请输入备案号', trigger: 'blur'}
          ],
          category: [
            {required: true, message: '请选择类别', trigger: 'blur'}
          ],
          // upCategory: [
          //   {required: true, message: '请选择上级目录', trigger: 'blur'}
          // ],
          route: [
            {required: true, message: '请输入路由', trigger: 'blur'}
          ],
          seoTitle: [{required: true, message: '尺寸对于百度收录很重要', trigger: 'blur'}],
          src: [{required: true, message: '复制要链接的页面网址粘贴到此处', trigger: 'blur'}],
          mark: [{required: true, message: '请输入唯一的组件标签,例:el-input', trigger: 'blur'}],

          //范围

          price: [
            {required: true, message: '价格不能为空', trigger: 'blur'},
            {validator: this.$tool.betweenInt(1, 999999), required: true}

          ],
          number: [
            {required: true, message: '产品数量不能为空', trigger: 'blur'},
            {validator: this.$tool.betweenInt(1, 999999), required: true}
          ],
        }

      }
    },
    props: {data: {type: Object, default: {}}},
    methods: {

      //编辑器editor--------------------------------------------------------------------

      addImage: function (file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)
        var formData = new FormData();
        formData.append('file', file)
        this.$axios.post('/upload', formData).then(({res}) => {

          let url = res// Get url from response

          Editor.insertEmbed(cursorLocation, 'image', url);
          resetUploader();
        })
          .catch((err) => {
            console.log(err);
          })
      },
      // modal------------------------------------------------------------------
      //提交数据按钮
      close(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      async submit() {
        try {
          await this.$refs.form.validate()
          this.visible = false
          //sent  curCategory to father component
          this.$emit('submit', this.data.category)
        } catch (e) {
          this.$message('有必填的字段!' + e)
        }
      },
      reset(formName) {
        this.$refs[formName].resetFields();
      },

    },
    mixins: [mapMixin]
  }
</script>

<style lang="less" module>
  .uniform {
    h4 {
      font-size: 14px;
      line-height: 2;
      border-bottom: 1px solid #ddd;
      margin-bottom: 10px
    }

    section {
      background: #fAfAfA;
      padding: 30px 10px 10px;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;

      > div {
        flex: 1 1 24%;
      }

      .editor {
        min-width: 100%;

        * + button {
          margin-top: 0px;
        }

        :global(.ql-container) {
          background: white
        }
      }
    }
  }
</style>
