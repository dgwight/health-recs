<script>
  import api from '../api/index'

  export default {
    name: 'IndexPage',
    data () {
      return {
        loaded: false,
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
      Promise.all([
        this.getRecommendations(),
        this.getNameMappings(),
        this.getRecommendationCount()
      ]).then(() => {
        this.loaded = true
      })
    },
    watch: {
      clinic () {
        this.getRecommendations()
        this.getNameMappings()
        this.getRecommendationCount()
      },
      pageNumber () {
        this.getRecommendations()
      },
      pageSize () {
        this.getRecommendations()
      }
    },
    methods: {
      getRecommendations () {
        return api.getRecommendation(this.clinic, this.pageSize, this.pageNumber).then(recs => {
          this.recs = recs
        })
      },
      getNameMappings () {
        return api.getNameMappings(this.clinic).then(names => {
          this.names = names
        })
      },
      getRecommendationCount () {
        return api.getRecommendationCount(this.clinic).then(totalRecs => {
          this.totalRecs = totalRecs
        })
      }
    }
  }
</script>

<template>
  <b-container v-if="loaded">
    <h2 class="mt-5">
      Procedure Recommendations
    </h2>

    <b-row class="mt-3">
      <b-col cols="auto">
        <b-form-select v-model="pageSize" :options="[3, 10, 20, 30, 50]"/>
      </b-col>
      <b-col cols="5">
        <b-form-select v-model="clinic" :options="clinics"/>
      </b-col>
    </b-row>

    <b-table-simple responsive class="mt-3 mb-0">
      <table-header v-if="names" :names="names"/>
      <b-tbody>
        <recommendation-row
          v-for="(rec, index) in recs"
          :key="index"
          :recommendation="rec"
          :names="names"/>
      </b-tbody>
    </b-table-simple>
    <table-footer :total-recs="totalRecs" :page-size="pageSize" :page-number.sync="pageNumber"/>
  </b-container>
</template>
