import React from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from './utils/update-action'

import {
  Card,
  Typography,
  Divider,
  Button,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: '2fr 4fr',
    justifyItems: 'start',
  },
}))

const ContactFormReview = ({ step, setStep }) => {
  const classes = useStyles()
  const { state } = useStateMachine(updateAction)
  if (step !== 3) {
    return null
  }

  const finalSubmit = () => {}

  const FieldPreview = ({ label, inputData, noDivider = false }) => {
    const classes = useStyles()

    return (
      <>
        <div className={classes.container}>
          <Typography component="p" variant="h6">
            {label}
          </Typography>
          <Typography component="p">{inputData}</Typography>
        </div>
        {noDivider ? null : <Divider />}
      </>
    )
  }

  return (
    <>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <Card className={classes.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="textPrimary" variant="h5">
            Contact
          </Typography>
          <Button
            color="primary"
            type="button"
            variant="outlined"
            onClick={() => setStep(1)}
          >
            Edit
          </Button>
        </div>
        <FieldPreview label="First Name" inputData={state.data.firstName} />
        <FieldPreview label="Last Name" inputData={state.data.lastName} />
        <FieldPreview label="Age" inputData={state.data.age} />
        <FieldPreview
          label="Date of Birth"
          inputData={state.data.dob}
          noDivider
        />
      </Card>
      <Card className={classes.card}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography color="textPrimary" variant="h5">
            Address
          </Typography>
          <Button
            color="primary"
            type="button"
            variant="outlined"
            onClick={() => setStep(2)}
          >
            Edit
          </Button>
        </div>
        <FieldPreview
          label="Address Line 1"
          inputData={state.data.addressPrimary}
        />
        <FieldPreview
          label="Address Line 2"
          inputData={state.data.addressSecondary}
        />
        <FieldPreview label="City" inputData={state.data.city} />
        <FieldPreview label="State" inputData={state.data.state} />
        <FieldPreview label="Zip Code" inputData={state.data.zip} noDivider />
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
