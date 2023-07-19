# health-recs

## Notes
- I added a getRecommendationCount for pagination
- I decided to pass names into rec-row instead of using the number of keys on the patientAttributes. This makes sure
  there are no visual issues if the data was corrupted
- I usually like to use Vuex / ect to have a global data store, but this currently wasn't complex enough to need it

## Questions
- There is one recommendation for 'SCS', should a column for it?
- Should I add better looking dropdowns with labels?
