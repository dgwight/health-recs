<script>
  import { first, last } from 'lodash'
  import { getRecommendation, getRecommendationCount, getNameMappings } from '../api/index'

  export default {
    name: 'IndexPage',
    data () {
      return {
        clinic: 'seattle-grace',
        clinics: [{
          value: 'seattle-grace',
          text: 'Seattle Grace Clinic (QA)'
        }, {
          value: 'sacred-heart',
          text: 'Sacred Heart Clinic (QA)'
        }],
        recs: [],
        names: {},
        pageSize: 3,
        pageNumber: 1,
        totalRecs: 0
      }
    },
    created () {
      this.loadResults()
    },
    watch: {
      clinic () {
        this.loadResults()
      },
      pageNumber () {
        this.loadResults()
      },
      pageSize () {
        this.loadResults()
      }
    },
    computed: {
      patientInfoHeader () {
        return this.names.header ? Object.keys(this.names.header) : []
      },
      paginationText () {
        const lowerValue = (this.pageNumber - 1) * this.pageSize + 1
        const upperWindow = Math.min(this.pageNumber * this.pageSize, this.totalRecs)
        return `Showing ${lowerValue} to ${upperWindow} of ${this.totalRecs} entries`
      },
      columns () {
        return this.names.column ? Object.keys(this.names.column) : []
      },
    },
    methods: {
      getColsForHeader (header) {
        return this.names.header ? Object.keys(this.names.header[header]).length : 1
      },
      loadResults () {
        getRecommendation(this.clinic, this.pageSize, this.pageNumber).then(recs => {
          console.log(recs)
          this.recs = recs
        })
        getNameMappings(this.clinic).then(names => {
          console.log(names)
          this.names = names
        })
        getRecommendationCount(this.clinic).then(totalRecs => {
          this.totalRecs = totalRecs
        })
      }
    }
  }
</script>

<template>
  <b-container>
    <h2 class="mt-5">
      Procedure Recommendations
    </h2>

    <b-row class="mt-3">
      <b-col cols="auto">
        <b-form-select v-model="pageSize" :options="[3, 10, 20, 30, 50]"></b-form-select>
      </b-col>
      <b-col cols="5">
        <b-form-select v-model="clinic" :options="clinics"></b-form-select>
      </b-col>
    </b-row>

    <b-table-simple responsive class="mt-3">
      <colgroup>
        <col>
        <col>
      </colgroup>
      <colgroup>
        <col>
        <col>
        <col>
      </colgroup>
      <colgroup>
        <col>
        <col>
      </colgroup>
      <b-thead>
        <b-tr>
          <b-th v-for="header in patientInfoHeader" :colspan="getColsForHeader(header)">{{ header }}</b-th>
          <b-th colspan="3">Recommendations</b-th>
        </b-tr>
        <b-tr>
          <b-th v-for="name in names.column">{{ name }}</b-th>
          <b-th>Rec Date</b-th>
          <b-th>BVN</b-th>
          <b-th>SIJ</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <recommendation-row v-for="rec in recs" :recommendation="rec" :columns="columns"/>
      </b-tbody>
    </b-table-simple>
    <hr>
    <b-row>
      <b-col style="opacity: 0.5">
        {{ paginationText }}
      </b-col>
      <b-col cols="auto">
        <b-pagination
          v-model="pageNumber"
          :total-rows="totalRecs"
          :per-page="pageSize"
          first-number
          last-number/>
      </b-col>
    </b-row>
  </b-container>
</template>
