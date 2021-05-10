const CustomerValidations = {
    aadharNo: {
        rules: [
          {
            test: /^[0-9]{9,}/,
            message: 'Aadhar number should contain a min of 9 digits ',
          },
        ],
       errors: [],
        valid: false,
        state: ''
      },

     
      accountHolderName: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){3,}/,
            message: 'Account Holder Name should contain a min of 3 characters ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },


      accountNo: {
        rules: [
          {
            test: /^[0-9]{2,}/,
            message: 'Account number should be greater than 2 digits ',
          },
        ],
       errors: [],
        valid: false,
        state: ''
      },

      accountType: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){6,7}/,
            message: 'Account Type should be Savings or Current or Salary only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      city: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){3,}/,
            message: 'City must be char only ',
          },
        ],
       errors: [],
        valid: false,
        state: ''
      },

      country: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){3,}/,
            message: 'Country must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      state: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){3,}/,
            message: 'State must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      street: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){3,}/,
            message: 'Enter a valid detail ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      zip: {
        rules: [
          {
            test: /^(?=.*[0-9]){6}/,
            message: 'Zip should contain 6 digits ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      firstName: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){2,}/,
            message: 'First Name must be char only ',
          },
        ],
        errors: [],
        valid: false,
        state: ''
      },

      lastName: {
        rules: [
          {
            test:  /^(?=.*[a-z])(?=.*[A-Z]){0,}/,
            message: 'Last Name must be char only ',
          },
        ],
       errors: [],
        valid: false,
        state: ''
      },


    mobileNo: {
      rules: [
        {
          test: /^(?=.*[6-9]){1}[0-9]{9}/,
          message: 'Mobile number should be a 10 digit number with first digit from 6 to 9',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
     
  
  };
  export default CustomerValidations;