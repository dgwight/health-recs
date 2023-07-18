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
      }
    }
  }
</script>

<template>
  <b-tr>
    <b-td>{{ recommendation.patientAttributes.account_number }}</b-td>
    <b-td>{{ recommendation.patientAttributes.date_of_birth }}</b-td>
    <b-td>{{ recommendation.patientAttributes.gender }}</b-td>
    <b-td>{{ recommendation.recDate }}</b-td>
    <b-td>{{ bvn }}</b-td>
    <b-td>{{ su }}</b-td>
  </b-tr>
</template>
