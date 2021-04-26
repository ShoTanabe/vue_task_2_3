<template>
  <div id="app">
    <MyHeader></MyHeader>
    <div id="main_container">
      <div class="main_header">
        <div class="step_icon">STEP4</div>
        <p class="header_text"><font-awesome-icon icon="file-alt" /> 以下の内容をご確認ください</p>
      </div>
      <div class="main_body">
        <div class="questions">
          <p class="question_title">-性別-</p>
          <div class="question_answer">
            <p>{{ answerGender }}</p>
          </div>
        </div>
        <div class="questions">
          <p class="question_title">-生年月日-</p>
          <div class="question_answer">
            <p>{{ answerBirthday }}</p>
          </div>
        </div>
        <div class="questions">
          <p class="question_title">-現在、生命保険に加入されていますか？-</p>
          <div class="question_answer">
            <p>{{ answerQuestion01 }}</p>
          </div>
        </div>
        <div class="questions">
          <p class="question_title">-現在、入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <div class="question_answer">
            <p>{{ answerQuestion02 }}</p>
          </div>
        </div>
        <div class="questions">
          <p class="question_title">-過去５年以内に、病気やけがで、手術を受けたこと、または、継続して７日以上の入院をしたことがありますか？-</p>
          <div class="question_answer">
            <p>{{ answerQuestion03 }}</p>
          </div>
        </div>
        <div class="questions">
          <p class="question_title">-ご相談内容-</p>
          <div class="question_answer">
            <p>{{ answerFreetext }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center_box">
      <router-link to="/"><div class="btn_fl"><font-awesome-icon icon="angle-left" />  修正する</div></router-link>
      <router-link to="/"><div class="btn_fr">送信  <font-awesome-icon icon="angle-right" /></div></router-link>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/my_header";
export default {
  components: {
    MyHeader
  },
  computed: {
    answerGender() {
      return this.$store.state.inputGender
    },
    answerBirthday() {
      return this.$store.state.inputBirthYear + '年 ' + this.$store.state.inputBirthMonth + ' 月 ' + this.$store.state.inputBirthDay + ' 日'
    },
    answerQuestion01() {
      return this.$store.state.inputQuestion01
    },
    answerQuestion02() {
      return this.$store.state.inputQuestion02
    },
    answerQuestion03() {
      return this.$store.state.inputQuestion03
    },
    answerFreetext() {
      return this.$store.state.inputFreetext
    },
  }
}
</script>

<style lang="scss">
  .question_answer{
    margin-left: 2em;
  }

  .center_box{
    margin-bottom: 80px;
  }
</style>
