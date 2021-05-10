const CourierValidations = {
  consignmentNo: {
      rules: [
          {
              test: /^[0-9]/,
              message: 'Consignment number should cantain only numbers',
          },
      ],
      errors:[],
      valid: false,
      state: ''
  },

  deliveredDate:{
    rules: [
      {
        test: /^[0-9*#-]+$/,
        message: 'Delivered Date must contain only numerical characters',
      },
      {
        test: (value) => {
          return value.length > 0;
        },
        message: 'Delivered Date must be longer than three characters',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },

  initiatedDate:{
    rules: [
      {
        test: /^[0-9*#-]+$/,
        message: 'Initiated Date must contain only numerical characters',
      },
      {
        test: (value) => {
          return value.length > 0;
        },
        message: 'Initiated Date must be longer than three characters',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },



  aadharNo:{
    rules: [
        {
            test: /^[0-9]/,
            message: 'Aadhar number should cantain only numbers',
        },
    ],
    errors:[],
    valid: false,
    state: ''
},

accountHolderName:  {
  rules: [
    {
      test: /^[a-zA-Z ]*$/,
      message: 'Account Holder Name must contain only alphabets characters',
    },
    {
      test: (value) => {
        return value.length > 3;
      },
      message: 'Account Holder must be longer than three characters',
    },
  ],
  errors: [],
  valid: false,
  state: '',
},

accountNo:{
  rules: [
      {
          test: /^[0-9]/,
          message: 'Account number should cantain only numbers',
      },
  ],
  errors:[],
  valid: false,
  state: ''
},

accountType:{
rules: [
  {
    test: /^[a-zA-Z ]*$/,
    message: 'Account Type must contain only alphabets characters',
  },
  {
    test: (value) => {
      return value.length > 0;
    },
    message: 'Account Type must be longer than three characters',
  },
],
errors: [],
valid: false,
state: '',
},

city:{
rules: [
  {
    test: /^[a-zA-Z ]*$/,
    message: 'City Name must contain only alphabets characters',
  },
  {
    test: (value) => {
      return value.length > 0;
    },
    message: 'City Name must be longer than three characters',
  },
],
errors: [],
valid: false,
state: '',
},

country:{
rules: [
  {
    test: /^[a-zA-Z ]*$/,
    message: 'Country Name must contain only alphabets characters',
  },
  {
    test: (value) => {
      return value.length > 0;
    },
    message: 'Country Name must be longer than three characters',
  },
],
errors: [],
valid: false,
state: '',
},

street:{
rules: [
  {
    test: /^[a-zA-Z ]*$/,
    message: 'Street Name must contain only alphabets characters',
  },
  {
    test: (value) => {
      return value.length > 0;
    },
    message: 'Street Name must be longer than three characters',
  },
],
errors: [],
valid: false,
state: '',
}, 


state:{
rules: [
  {
    test: /^[a-zA-Z ]*$/,
    message: 'State Name must contain only alphabets characters',
  },
  {
    test: (value) => {
      return value.length > 0;
    },
    message: 'State Name must be longer than three characters',
  },
],
errors: [],
valid: false,
state: '',
},

zip: {
rules: [
    {
        test: /^[0-9]/,
        message: 'Zip Code should cantain only numbers',
    },
],
errors:[],
valid: false,
state: ''
},

  customerId: {
    rules: [
        {
            test: /^[0-9]/,
            message: 'Customer number should cantain only numbers',
        },
    ],
    errors:[],
    valid: false,
    state: ''
},

firstName: {
  rules: [
    {
      test: /^[a-zA-Z ]*$/,
      message: 'First Name must contain only alphabets characters',
    },
    {
      test: (value) => {
        return value.length > 3;
      },
      message: 'First Name must be longer than three characters',
    },
  ],
  errors: [],
  valid: false,
  state: '',
},

lastName: {
  rules: [
    {
      test: /^[a-zA-Z ]*$/,
      message: 'Last Name must contain only alphabets characters',
    },
    {
      test: (value) => {
        return value.length > 0;
      },
      message: 'Last Name must be longer than three characters',
    },
  ],
  errors: [],
  valid: false,
  state: '',
},

    mobileNo: {
      rules: [
        {
          test: /^[0-9]/,
          message: 'Mobile number should be a 10 digit number with first digit from 6 to 9',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },

    status: {
      rules: [
        {
          test: /^(?=.[A-Z]){0,}/,
          message: 'Status must be char only ',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },

    

};
export default CourierValidations;