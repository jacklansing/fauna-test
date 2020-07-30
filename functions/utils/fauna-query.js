require('dotenv').config()
const fetch = require('node-fetch')

async function query({ query, variables = {} }) {
  const result = await fetch(process.env.FAUNA_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.FAUNA_SERVER_SECRET}`,
    },
    body: JSON.stringify({ query, variables }),
  }).then(response => response.json())
  return result
}

exports.query = query
