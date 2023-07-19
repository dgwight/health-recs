<script>
  export default {
    name: 'TableHeader',
    props: {
      names: {
        type: Object,
        default: null,
        required: true
      }
    },
    computed: {
      patientInfoHeader () {
        return this.names.header ? Object.keys(this.names.header) : {}
      }
    },
    methods: {
      getColsForHeader (header) {
        return this.names.header ? Object.keys(this.names.header[header]).length : 1
      }
    }
  }
</script>

<template>
  <b-thead>
    <b-tr>
      <b-th v-for="header in patientInfoHeader" :key="header" :colspan="getColsForHeader(header)">
        {{ header }}
      </b-th>
      <b-th colspan="3">Recommendations</b-th>
    </b-tr>
    <b-tr>
      <b-th v-for="name in names.column" :key="name">{{ name }}</b-th>
      <b-th>Rec Date</b-th>
      <b-th>BVN</b-th>
      <b-th>SIJ</b-th>
    </b-tr>
  </b-thead>
</template>
