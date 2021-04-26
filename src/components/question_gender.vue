<template>
  <div class="questions">
    <p class="question_title">-性別-</p>
    <div class="question_answer">
      <template v-for="(option, index) in options">
        <label :key= "index">
          <input type="radio" name="gender"
          :value="option"
          @change="setGender">{{ option }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['男性','女性'],
    }
  },
  methods: {
    setGender(event) {
      this.$store.commit('setGender', event.target.value);
    }
  },
  created() {
    this.option = this.$store.state.inputGender;
  }
}
</script>

<style>
input {
  width: 4%;
  }
</style>
