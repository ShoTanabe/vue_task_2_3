import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputGender: '',
    inputBirthYear: '',
    inputBirthMonth: '',
    inputBirthDay: '',
    inputQuestion01: '',
    inputQuestion02: '',
    inputQuestion03: '',
    inputFreetext: ''
  },
  mutations: {
    setGender(state, gender) {
      state.inputGender = gender
    },
    setBirthYear(state, year) {
      state.inputBirthYear = year
    },
    setBirthMonth(state, month) {
      state.inputBirthMonth = month
    },
    setBirthDay(state, day) {
      state.inputBirthDay = day
    },
    setQuestion01(state, question01) {
      state.inputQuestion01 = question01
    },
    setQuestion02(state, question02) {
      state.inputQuestion02 = question02
    },
    setQuestion03(state, question03) {
      state.inputQuestion03 = question03
    },
    setFreetext(state, freetext) {
      state.inputFreetext = freetext
    }
  }
});
