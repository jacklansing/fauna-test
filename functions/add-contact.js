const { query } = require('./utils/fauna-query')

const ADD_CONTACT = `
  mutation(
    $firstName: String!
    $lastName: String!
    $age: Int!
    $street: String!
    $city: String!
    $state: String!
    $zipCode: String!
    $email: String!
    $phone: String!
  ) {
    createContact(
      data: {
        firstName: $firstName
        lastName: $lastName
        age: $age
        address: { street: $street, city: $city, state: $state, zipCode: $zipCode }
        email: $email
        phone: $phone
      }
    ) {
      _id
    }
  }`

exports.handler = async event => {
  const {
    firstName,
    lastName,
    age,
    street,
    city,
    state,
    zipCode,
    email,
    phone,
  } = JSON.parse(event.body)

  const { data, errors } = await query({
    query: ADD_CONTACT,
    variables: {
      firstName,
      lastName,
      age,
      street,
      city,
      state,
      zipCode,
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
