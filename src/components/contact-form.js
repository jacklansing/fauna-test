import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { TextField, Paper, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    width: '70ch',
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}))

const ContactForm = props => {
  const classes = useStyles()

  const handleSubmit = async e => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      email,
      phone,
      zipCode,
      age,
    } = e.target

    await fetch('/.netlify/functions/add-contact', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        age: parseInt(age.value),
        street: street.value,
        city: city.value,
        state: state.value,
        zipCode: zipCode.value,
        email: email.value,
        phone: phone.value,
      }),
    }).then(res => {
      if (res.status === 200) {
        console.log('do success')
      } else {
        console.log(res.status, 'do failure')
      }
    })
  }

  return (
    <Paper
      elevation={4}
      component="form"
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="firstName" label="First Name" />
      <TextField id="lastName" label="Last Name" />
      <TextField id="street" label="Street" style={{ width: '50ch' }} />
      <TextField id="city" label="City" />
      <TextField id="state" label="State" />
      <TextField id="email" label="Email" />
      <TextField id="phone" label="Phone" />
      <TextField id="zipCode" label="Zip" />
      <TextField id="age" label="Age" />
      <Button
        color="primary"
        variant="contained"
        style={{ verticalAlign: 'bottom' }}
        type="submit"
      >
        Submit
      </Button>
    </Paper>
  )
}

export default ContactForm
