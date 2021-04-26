<template>
  <div id="textarea">
    <div class="questions">
      <p class="question_title"></p>
      <div class="question_answer">
        <textarea
        v-model="freetext"
        @input="setFreetext"
        name="freetext" rows="15" cols="65" placeholder="こちらにご入力ください"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        freetext: ''
      }
    },
    methods: {
      setFreetext() {
        this.$store.commit('setFreetext', this.freetext)
      }
    }
  }

</script>

<style>
  textarea {
    border: #999999 solid 1px;
    padding: 8px;
    resize: none;
  }
</style>
