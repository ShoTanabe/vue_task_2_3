<template>
  <div>
    <div class="questions">
      <p class="question_title">現在、生命保険に加入されていますか？</p>
      <div class="question_answer">
        <div class="input_line">
          <template v-for="(option, index) in options">
            <label :key= "index">
              <input type="radio" name="insurance"
              @input="clickQuestion01"
              :value="option">{{ option }}
            </label>
          </template>
        </div>
      </div>
    </div>
    <div class="questions" v-if="secondQuestion">
      <p class="question_title">現在、入院中ですか。または、最近3か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <div class="question_answer">
        <div class="input_line">
          <template v-for="(option, index) in options">
            <label :key= "index">
              <input type="radio" name="hospitalization"
              @input="clickQuestion02"
              :value="option">{{ option }}
            </label>
          </template>
        </div>
      </div>
    </div>
    <div class="questions" v-if="thirdQuestion">
      <p class="question_title">過去５年以内に、病気やけがで、手術を受けたこと、または、継続して７日以上の入院をしたことがありますか？</p>
      <div class="question_answer">
        <div class="input_line">
        <template v-for="(option, index) in options">
          <label :key= "index">
            <input type="radio" name="surgery"
            :value="option"
            @input="setQuestion03">{{ option }}
          </label>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondQuestion: false,
      thirdQuestion: false,
      options: ['はい', 'いいえ'],
    }
  },
  methods: {
    showSecondQuestion() {
      this.secondQuestion = true;
    },
    showThirdQuestion() {
      this.thirdQuestion = true;
    },
    setQuestion01(event01) {
      this.$store.commit('setQuestion01', event01.target.value);
    },
    setQuestion02(event02) {
      this.$store.commit('setQuestion02', event02.target.value);
    },
    setQuestion03(event03) {
      this.$store.commit('setQuestion03', event03.target.value);
    },
    clickQuestion01(event01) {
      this.showSecondQuestion();
      this.setQuestion01(event01);
    },
    clickQuestion02(event02) {
      this.showThirdQuestion();
      this.setQuestion02(event02);
    }
  }
}

</script>

<style>
input {
  width: 4%;
  }
</style>
