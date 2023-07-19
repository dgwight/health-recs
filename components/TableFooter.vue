<script>
  export default {
    name: 'TableFooter',
    props: {
      pageNumber: {
        type: Number,
        default: 1,
        required: true
      },
      pageSize: {
        type: Number,
        default: 3,
        required: true
      },
      totalRecs: {
        type: Number,
        default: 0,
        required: true
      }
    },
    computed: {
      paginationText () {
        const lowerValue = (this.pageNumber - 1) * this.pageSize + 1
        const upperWindow = Math.min(this.pageNumber * this.pageSize, this.totalRecs)
        return `Showing ${lowerValue} to ${upperWindow} of ${this.totalRecs} entries`
      }
    },
    watch: {
      pageNumber () {
        this.$emit('update:page-number', this.pageNumber)
      }
    }
  }
</script>

<template>
  <div>
    <hr class="mt-0">
    <b-row>
      <b-col class="pagination-text">
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
  </div>
</template>

<style>
  .pagination-text {
    opacity: 0.5;
  }
</style>
