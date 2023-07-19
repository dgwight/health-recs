# health-recs

## Q1c

```js
const { groupBy, map } = require('lodash')

const ResultSchema = new mongoose.Schema({
  clinic_id: ObjectId, // This is a "foreign key" to Clinic colleciton
  patient_id: Number, // This is a "foreign key" to Patient collection
  field_nm: String,
  field_value: String
})

const ResultModel = mongoose.model('Result', ResultSchema)

async function getTableData (clinicId) {
  // part 1
  const dpList = await ResultModel.find({ clinic_id: clinicId }).exec()

  // part 2
  const results = map(groupBy(dpList, 'patient_id'), (dpList, patient_id) => {
    let result = { patient_id, a: '', b: '', c: '' }
    for (const dp of dpList) {
      result[dp.field_nm] = dp.field_value
    }
    return result
  })
}
```


## Q3
### Notes
- I added a getRecommendationCount for pagination
- I decided to pass names into rec-row instead of using the number of keys on the patientAttributes. This makes sure
  there are no visual issues if the data was corrupted
- I usually like to use Vuex / ect to have a global data store, but this currently wasn't complex enough to need it

### Questions
- There is one recommendation for 'SCS', should a column for it?
- Should I add better looking dropdowns with labels?


