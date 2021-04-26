<template>
    <div class="questions">
      <p class="question_title">-生年月日-</p>
      <div class="question_answer">
        <select name="year" id="select_year" @change="setBirthYear">
          <option hidden>-</option>
          <option
          v-for="(year, index) in years"
          :value="year"
          :key="index">{{ year }}</option>
        </select> 年
        <select name="month" id="select_month" @change="setBirthMonth">
          <option hidden>-</option>
          <option
          v-for="(month, index) in months"
          :value="month"
          :key="index">{{ month }}</option>
        </select> 月
        <select name="day" id="select_day" @change="setBirthDay">
          <option hidden>-</option>
          <option
          v-for="(day, index) in days"
          :value="day"
          :key="index">{{ day }}</option>
        </select> 日
      </div>
    </div>
</template>

<script>
import { yearOptions, monthOptions, dayOptions } from '@/helpers/definition';
export default {
  data() {
    return {
      years: yearOptions,
      months: monthOptions,
      days: dayOptions,
    }
  },
  methods: {
    setBirthYear(event01) {
      this.$store.commit('setBirthYear', event01.target.value);
    },
    setBirthMonth(event02) {
      this.$store.commit('setBirthMonth', event02.target.value)
    },
    setBirthDay(event03) {
      this.$store.commit('setBirthDay', event03.target.value)
    }
  }
}
</script>
