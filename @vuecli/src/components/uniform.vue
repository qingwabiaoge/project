<template>
  <!--新增商品-->
  <el-dialog
    :class="$style.uniform"
    :title="'编辑 '+data.type"
    :visible.sync="visible"
    width="90%"
    :before-close="close">

    <!--ref一定要写到这里 form的外层-->
    <el-form :model="data" :rules="$store.state.rules" ref="form">
      <h4>基本字段:</h4>
      <section>
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title">
          <el-input type="text" v-model="data.title" auto-complete="off"></el-input>
        </el-form-item>


        <el-form-item
          v-if="data.type==='goods'||data.type==='article'"
          label="栏目"
          :label-width="formLabelWidth" prop="cid">
          <el-select v-model="data.cid" placeholder="请选择">
            <el-option
              v-for="item in data.type==='article'?$store.getters.articleCategory
                                              :data.type==='goods'?$store.getters.goodsCategory:''"
              :key="item.title"
              :label="item.title"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="副标题" :label-width="formLabelWidth" prop="">
          <el-input type="text" v-model="data.subtitle" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item v-if="data.type==='component'" label="按钮文字" :label-width="formLabelWidth" prop="">
          <el-input type="text" v-model="data.button" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input type="text" v-model="data.info" auto-complete="off"
                    placeholder="一句话简介"></el-input>
        </el-form-item>


        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.description" auto-complete="off"
                    placeholder="请写一个通顺的句子最好句中包含seo标题内容"></el-input>
        </el-form-item>

        <el-form-item v-if="data.type==='goods'||data.type==='article'"
                      label="排序"
                      :label-width="formLabelWidth">
          <el-input type="number"
                    v-model.number="data.sort"
                    placeholder="数字越大排序越靠前"
                    auto-complete="off">

          </el-input>
        </el-form-item>

      </section>

      <h4 v-if="/(contact|联系)/i.test(data.title)">联系方式</h4>

      <section v-if="/(contact|联系)/i.test(data.title)">
        <el-form-item label="电话"
                      prop="tel">
          <!--data.name 数据-->
          <el-input v-model="data.tel"
                    placeholder="请输入电话号码">
          </el-input>
        </el-form-item>

        <el-form-item label=" 公众号二维码"
                      prop="qcode"
        >
          <upload v-model="data.qcode"
                  style="width: 300px">

          </upload>
        </el-form-item>

        <el-form-item label="QQ"
                      prop="qq">
          <!--data.name 数据-->
          <el-input v-model="data.qq"
                    placeholder="请输入qq号码">
          </el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <!--data.name 数据-->
          <el-input v-model="data.email"
                    placeholder="请输入qq号码">
          </el-input>
        </el-form-item>


        <el-form-item label="地址"
                      prop="address">
          <!--data.name 数据-->
          <el-input v-model="data.address"
                    placeholder="请输入地址">
          </el-input>
        </el-form-item>


        <el-form-item label="地图"
        >

          <upload v-model="data.map"
                  style="width: 300px">
          </upload>
        </el-form-item>
      </section>


      <h4 v-if="data.type==='goods'">产品字段:</h4>
      <section v-if="data.type==='goods'">
        <el-form-item label="原价" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.price" auto-complete="off"></el-input>
        </el-form-item>

        <el-tooltip class="item" effect="dark"
                    :content="(data.truePrice*10/data.price).toFixed(2).toString()+'折'" placement="right">
          <el-form-item label="实价" :label-width="formLabelWidth" prop="">
            <el-input type="number" v-model.number="data.truePrice" auto-complete="off"></el-input>
          </el-form-item>
        </el-tooltip>


        <el-form-item label="数量" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.number" auto-complete="off"></el-input>
        </el-form-item>


        <el-form-item label="材质" :label-width="formLabelWidth">
          <el-input type="text" v-model="data.material" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="重量 kg" :label-width="formLabelWidth" prop="">
          <el-input type="number" v-model.number="data.number" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="尺寸" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.size" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="颜色" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="data.color" auto-complete="off" placeholder="多个颜色用英文逗号,分开"></el-input>
        </el-form-item>

        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input type="number" v-model.number="data.suk" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="销售量" :label-width="formLabelWidth">
          <el-input type="number" v-model.number="data.sales" auto-complete="off"></el-input>
        </el-form-item>
      </section>

      <h4 v-if="data.type==='article'||data.type==='goods'">
        推广字段
      </h4>
      <section v-if="data.type==='article'||data.type==='goods'">
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

        <el-form-item v-if="data.type==='goods'"
                      label=" 缩略图"
                      prop="images">

          <upload-list :images.sync="data.images"
                       :limit="5">

          </upload-list>

        </el-form-item>


        <el-form-item v-else
                      :label="data.type==='global'?'LOGO':'缩略图'"
                     >

          <upload v-model="data.image">

          </upload>
        </el-form-item>

        <el-form-item v-if="data.isCategory===true"
                      label="栏目内页缩略图"
                     >

          <upload v-model="data.cimage">

          </upload>
        </el-form-item>


        <el-form-item label="图标"
                      v-if="data.type==='component'"
        >

          <upload v-model="data.icon">

          </upload>
        </el-form-item>

        <el-form-item label="背景"
                      v-if="data.type==='component'||data.type==='global'"
        >

          <upload v-model="data.background">

          </upload>
        </el-form-item>
        <el-form-item label="背景颜色"
                      v-if="data.type==='component'||data.type==='global'"
        >

          <el-color-picker v-model="data.backgroundColor" show-alpha></el-color-picker>
        </el-form-item>


        <el-form-item label="背景2"
                      v-if="data.type==='global'"
        >

          <upload v-model="data.background2">

          </upload>
        </el-form-item>

        <el-form-item label="背景3"
                      v-if="data.type==='global'"
        >

          <upload v-model="data.background2">

          </upload>
        </el-form-item>
      </section>

      <h4> 开关</h4>
      <section>

        <el-form-item v-if="data.type==='component'">
          <el-switch
            v-model="data.isCategory"
            active-text="栏目级组件"
            inactive-text="普通组件"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>

        <el-form-item>
          <el-switch
            v-if="data.type==='article'||data.type==='goods'"
            v-model="data.flag"
            active-text="首页推荐"
            inactive-text="不推荐"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>

        <el-form-item>
          <el-switch
            v-model="data.publish"
            active-text="发布"
            inactive-text="存草稿"
            class="uk-padding-left-md"
          >
          </el-switch>
        </el-form-item>
      </section>

      <h4 v-if="data.type!=='global'&&data.isCategory!==false">
        <span v-if="data.isCategory===true">
          栏目内页内容
        </span>
        <span> 详细内容</span>
      </h4>

      <!-- undifine!==false-->
      <section v-if="data.type!=='global'&&data.isCategory!==false">

        <vue-editor id="editor"
                    useCustomImageHandler
                    @imageAdded="handleImageAdded"
                    :class="$style.editor"
                    v-model="data.content">
        </vue-editor>

      </section>

      <section v-if="data.type==='global'">


        <el-form-item label="产品分页">
          <el-input type="number" v-model.number="data.goodsPagerSize" auto-complete="off"></el-input>
        </el-form-item>


        <el-form-item label="新闻分页">
          <el-input type="number" v-model.number="data.newsPagerSize" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="备案号"
                      prop="beian">
          <!--global.name 数据-->
          <el-input v-model="data.beian"
                    placeholder="请输入备案号">
          </el-input>
        </el-form-item>
      </section>


    </el-form>

    <div class="test">{{data}}</div>
    <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false;" >取 消</el-button>

    <el-button type="primary" @click="submit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

  import {VueEditor} from 'vue2-editor'
  import uploadList from '@/components/upload-list'
  import upload from '@/components/upload-simple'


  export default {

    components: {VueEditor, upload, uploadList},
    data() {
      return {
        formLabelWidth: '80px',
        visible: false,
      }
    },
    props: {data: {type: Object, default: {}}}

    , methods: {

      //编辑器editor--------------------------------------------------------------------

      handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)
        var formData = new FormData();
        formData.append('file', file)
        this.$store.dispatch('upload', formData).then(({res}) => {

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
          this.visible=false
          this.$emit('submit')
        } catch (e) {
          this.$message('有必填的字段!')
        }
      },
      reset(formName) {
        this.$refs[formName].resetFields();
      },

    }
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

        :global(.ql-container) {
          background: white
        }
      }
    }
  }
</style>
