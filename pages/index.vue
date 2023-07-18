<script>
  import { first } from 'lodash'
  import { getRecommendation, getNameMappings } from '../api/index'

  const clinics = [{
    value: 'seattle-grace',
    text: 'Seattle Grace Clinic (QA)'
  }, {
    value: 'sacred-heart',
    text: 'Sacred Heart'
  }]

  export default {
    name: 'IndexPage',
    data () {
      return {
        clinic: first(clinics),
        clinics: clinics,
        recs: [],
        names: {},
        pageSize: 3,
        pageNumber: 1
      }
    },
    created () {
      getRecommendation(this.clinic.value, this.pageSize, this.pageNumber).then(recs => {
        this.recs = recs
      })
      getNameMappings(this.clinic.value).then(names => {
        this.names = names
      })
    },
    computed: {
      patientInfoCols () {
        return this.names.column ? Object.keys(this.names.column).length : 0
      }
    }
  }
</script>

<template>
  <b-container>
    <h1 class="mt-5">
      Procedure Recommendations
    </h1>

    <b-row class="mt-3">
      <b-col cols="auto">
        <b-form-select v-model="pageSize" :options="[3, 10, 20, 30, 50]"></b-form-select>
      </b-col>
      <b-col cols="3">
        <b-form-select v-model="clinic" :options="clinics"></b-form-select>
      </b-col>
    </b-row>

    <b-table-simple responsive class="mt-3">
      <colgroup><col><col></colgroup>
      <colgroup><col><col><col></colgroup>
      <colgroup><col><col></colgroup>
      <b-thead>
        <b-tr>
          <b-th :colspan="patientInfoCols">Patient</b-th>
          <b-th colspan="3">Recommendations</b-th>
        </b-tr>
        <b-tr>
          <b-th v-for="name in names.column">{{ name }}</b-th>
          <b-th>Rec Date</b-th>
          <b-th>BVN</b-th>
          <b-th>SU</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <recommendation-row v-for="rec in recs" :recommendation="rec"/>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="7">
            Showing 1 to 10 of 250 entries
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
  </b-container>
</template>
