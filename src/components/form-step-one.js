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

const FormStepOne = ({ step, setStep }) => {
  const { register, handleSubmit } = useForm()
  const { action } = useStateMachine(updateAction)
  const classes = useStyles()

  if (step !== 1) {
    return null
  }

  const onSubmit = data => {
    action(data)
    setStep(2)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems="center" justify="center">
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="age"
          name="age"
          label="Age"
          inputRef={register}
          className={classes.textField}
        />
        <TextField
          id="date"
          label="DOB"
          type="date"
          defaultValue="2000-01-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        next
      </Button>
    </form>
  )
}

export default FormStepOne
