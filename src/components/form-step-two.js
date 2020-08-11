import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button, makeStyles, Grid } from '@material-ui/core'
import { useStateMachine } from 'little-state-machine'
import updateAction from './utils/update-action'

const useStyles = makeStyles(theme => ({
  root: {},
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
    flex: '1 1 200px',
  },
  button: {
    width: '100%',
    marginBottom: theme.spacing(1),
  },
}))

const FormStepTwo = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm()
  const { action, state } = useStateMachine(updateAction)
  const classes = useStyles()

  if (step !== 2) {
    return null
  }

  const onSubmit = data => {
    action(data)
    setStep(3)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <TextField
          id="addressPrimary"
          name="addressPrimary"
          label="Address Line 1"
          inputRef={register}
          className={classes.textField}
          defaultValue={
            state.data.addressPrimary ? state.data.addressPrimary : ''
          }
        />
        <TextField
          id="addressSecondary"
          name="addressSecondary"
          label="Address Line 2"
          inputRef={register}
          className={classes.textField}
          defaultValue={
            state.data.addressSecondary ? state.data.addressSecondary : ''
          }
        />
        <TextField
          id="city"
          name="city"
          label="City"
          inputRef={register}
          className={classes.textField}
          defaultValue={state.data.city ? state.data.city : ''}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          defaultValue="NY"
          inputRef={register}
          className={classes.textField}
          defaultValue={state.data.state ? state.data.state : ''}
        />
        <TextField
          id="zip"
          name="zip"
          label="Zip"
          inputRef={register}
          className={classes.textField}
          defaultValue={state.data.zip ? state.data.zip : ''}
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => setStep(step - 1)}
        >
          back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          next
        </Button>
      </Grid>
    </form>
  )
}

export default FormStepTwo
