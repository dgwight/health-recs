<script>
  import { find } from 'lodash'

  export default {
    name: 'RecommendationRow',
    props: {
      recommendation: {
        type: Object,
        default: null,
        required: true
      },
      names: {
        type: Object,
        default: null,
        required: true
      }
    },
    computed: {
      hasBvn () {
        return !!find(this.recommendation.recommendedProcedures, { name: 'BVN' })
      },
      hasSij () {
        return !!find(this.recommendation.recommendedProcedures, { name: 'SIJ' })
      },
      columns () {
        return this.names.column ? Object.keys(this.names.column) : []
      }
    }
  }
</script>

<template>
  <b-tr>
    <b-td v-for="attribute in columns">
      {{ recommendation.patientAttributes[attribute] }}
    </b-td>
    <b-td>
      {{ recommendation.recDate }}
    </b-td>
    <b-td>
      <b-img v-if="hasBvn" src="../static/checkmark.svg" width="16"/>
    </b-td>
    <b-td>
      <b-img v-if="hasSij" src="../static/checkmark.svg" width="16"/>
    </b-td>
  </b-tr>
</template>
