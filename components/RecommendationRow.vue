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
      su () {
        return !!find(this.recommendation.recommendedProcedures, { name: 'SU' })
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
    <b-td>{{ bvn }}</b-td>
    <b-td>{{ su }}</b-td>
  </b-tr>
</template>
