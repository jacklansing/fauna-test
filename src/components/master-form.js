import React, { useState } from 'react'
import { Paper } from '@material-ui/core'
import { StateMachineProvider, createStore } from 'little-state-machine'
import FormStepOne from './form-step-one'
import FormStepTwo from './form-step-two'
import ContactFormReview from './contact-form-review'

createStore({
  data: {},
})

const MasterForm = props => {
  const [step, setStep] = useState(1)
  return (
    <StateMachineProvider>
      <Paper style={{ padding: '2rem', maxWidth: 600 }} elevation={4}>
        <FormStepOne step={step} setStep={setStep} />
        <FormStepTwo step={step} setStep={setStep} />
        <ContactFormReview step={step} setStep={setStep} />
      </Paper>
    </StateMachineProvider>
  )
}

export default MasterForm
