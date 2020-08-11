import React from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from './utils/update-action'

import { Card, Typography, Grid, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: theme.spacing(2),
  },
  button: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
}))

const ContactFormReview = ({ step, setStep }) => {
  const classes = useStyles()
  const { state } = useStateMachine(updateAction)
  if (step !== 3) {
    return null
  }

  const finalSubmit = () => {}

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <Card className={classes.card}>
        <Typography color="textPrimary" variant="h5">
          Contact
        </Typography>
        <Grid container alignContent="center" justify="center">
          <Grid item xs={3}>
            <Typography component="p" variant="h6">
              First Name
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography component="p">{state.data.firstName}</Typography>
          </Grid>
        </Grid>
      </Card>
      <Button
        type="button"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => setStep(step - 1)}
      >
        back
      </Button>
    </>
  )
}

export default ContactFormReview
