const { query } = require('./utils/fauna-query')

const ADD_CONTACT = `mutation ($firstName: String!, $lastName: String!, $age: Int!, $address: String!, $city: String!, $state: String!, $zip: Int!, $email: String!, $phone: String!) {
  createContact(data: { firstName: $firstName, lastName: $lastName, age: $age, address: $address, city: $city, state: $state, zip: $zip, email: $email, phone: $phone }) {
    firstName,
    lastName,
    age,
    address,
    city,
    state,
    zip,
    email,
    phone
  }
}`

exports.handler = async event => {
  const {
    firstName,
    lastName,
    age,
    address,
    city,
    state,
    zip,
    email,
    phone,
  } = JSON.parse(event.body)

  const { data, errors } = await query({
    query: ADD_CONTACT,
    variables: {
      firstName,
      lastName,
      age,
      address,
      city,
      state,
      zip,
      email,
      phone,
    },
  })

  if (errors) {
    console.error(errors)
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 201,
    body: JSON.stringify(data),
  }
}
