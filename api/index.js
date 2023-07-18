async function getRecommendation (clinicId, page_size = 3, page_number = 1) {
  await new Promise((resolve) => setTimeout(resolve, 250)) // Simulating a DB call
  return fakeDatabase.filter((o) => o.clinicId === clinicId).slice((page_number - 1) * page_size, page_number * page_size)
}

async function getNameMappings (clinicId) {
  await new Promise((resolve) => setTimeout(resolve, 250)) // Simulating a DB call
  let res = {}
  if (clinicId === 'seattle-grace') {
    res = {
      header: {
        Patient: ['account_number', 'date_of_birth', 'gender']
      },
      column: {
        account_number: 'Account Number',
        date_of_birth: 'Date Of Birth',
        gender: 'Gender'
      }
    }
  } else if (clinicId === 'sacred-heart') {
    res = {
      header: {
        Name: ['first_name', 'last_name'],
        Patient: ['sex', 'dob']
      },
      column: {
        first_name: 'First Name',
        last_name: 'Last Name',
        sex: 'Sex',
        dob: 'DOB'
      }
    }
  }
  return res
}

const fakeDatabase = [
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0001',
      date_of_birth: '1980-01-01',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }, { name: 'SIJ' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0002',
      date_of_birth: '1995-07-12',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SIJ' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0003',
      date_of_birth: '1972-09-30',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0004',
      date_of_birth: '1988-03-25',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0005',
      date_of_birth: '1991-06-14',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SIJ' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0006',
      date_of_birth: '1985-12-08',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0007',
      date_of_birth: '1978-04-17',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0008',
      date_of_birth: '1999-10-22',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }, { name: 'SIJ' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0009',
      date_of_birth: '1982-07-05',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0010',
      date_of_birth: '1994-02-19',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0011',
      date_of_birth: '1980-01-01',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }, { name: 'BVN' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0012',
      date_of_birth: '1995-07-12',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SIJ' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0013',
      date_of_birth: '1972-09-30',
      gender: 'M'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'seattle-grace',
    patientAttributes: {
      account_number: 'ABC0014',
      date_of_birth: '1988-03-25',
      gender: 'F'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Bob',
      last_name: 'Jones',
      sex: 'M',
      dob: '1980-01-01'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SCS' }, { name: 'BVN' }, { name: 'SIJ' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Alice',
      last_name: 'Smith',
      sex: 'F',
      dob: '1995-07-12'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SIJ' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'John',
      last_name: 'Doe',
      sex: 'M',
      dob: '1972-09-30'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Emily',
      last_name: 'Johnson',
      sex: 'F',
      dob: '1988-03-25'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Michael',
      last_name: 'Brown',
      sex: 'M',
      dob: '1991-06-14'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'SIJ' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Sophia',
      last_name: 'Davis',
      sex: 'F',
      dob: '1985-12-08'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'William',
      last_name: 'Taylor',
      sex: 'M',
      dob: '1978-04-17'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Olivia',
      last_name: 'Anderson',
      sex: 'F',
      dob: '1999-10-22'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }, { name: 'SIJ' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'James',
      last_name: 'Wilson',
      sex: 'M',
      dob: '1982-07-05'
    },
    recDate: '2023-07-09',
    recommendedProcedures: [{ name: 'BVN' }]
  },
  {
    clinicId: 'sacred-heart',
    patientAttributes: {
      first_name: 'Emma',
      last_name: 'Thomas',
      sex: 'F',
      dob: '1994-02-19'
    },
    recDate: '2023-07-09',
    recommendedProcedures: []
  }
]

module.exports = { getRecommendation, getNameMappings }
