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
  },
}))

const FormStepTwo = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm()
  const { action } = useStateMachine(updateAction)
  const classes = useStyles()

  if (step !== 2) {
    return null
  }

  const onSubmit = data => {
    action(data)
    setStep(-1)
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
        />
        <TextField
          id="addressSecondary"
          name="addressSecondary"
          label="Address Line 2"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="city"
          name="city"
          label="City"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="state"
          name="state"
          label="State"
          defaultValue="NY"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="zip"
          name="zip"
          label="Zip"
          inputRef={register}
          className={classes.textField}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </Grid>
    </form>
  )
}

export default FormStepTwo
