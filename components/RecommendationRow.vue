<script>
  import { find } from 'lodash'

  export default {
    name: 'RecommendationRow',
    props: {
      recommendation: {
        type: Object,
        default: null,
        required: true
      }
    },
    computed: {
      bvn () {
        return !!find(this.recommendation.recommendedProcedures, { name: 'BVN' })
      },
      sij () {
        return !!find(this.recommendation.recommendedProcedures, { name: 'SIJ' })
      },
      attributes () {
        return Object.keys(this.recommendation.patientAttributes)
      }
    }
  }
</script>

<template>
  <b-tr>
    <b-td v-for="attribute in attributes">{{ recommendation.patientAttributes[attribute] }}</b-td>
    <b-td>{{ recommendation.recDate }}</b-td>
    <b-td>
      <b-img v-if="bvn" src="../static/checkmark.svg" width="16" style="color: #d141ab"/>
    </b-td>
    <b-td>
      <b-img v-if="sij" src="../static/checkmark.svg" width="16"/>
    </b-td>
  </b-tr>
</template>
