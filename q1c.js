const { groupBy, map } = require('lodash')

// clinic_id not shown for simplicity
const dpList = [
  { 'patient_id': 1, 'field_nm': 'a', 'field_value': '1', 'clinic_id': '...' },
  { 'patient_id': 1, 'field_nm': 'b', 'field_value': '2', 'clinic_id': '...' },
  { 'patient_id': 3, 'field_nm': 'a', 'field_value': '3', 'clinic_id': '...' }
]

const results = map(groupBy(dpList, 'patient_id'), (dpList, patient_id) => {
  let result = { patient_id, a: '', b: '', c: '' }
  for (const dp of dpList) {
    result[dp.field_nm] = dp.field_value
  }
  return result
})
console.log(results)
