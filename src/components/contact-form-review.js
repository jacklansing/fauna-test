import React from 'react'
import { useStateMachine } from 'little-state-machine'
import updateAction from './utils/update-action'

const ContactFormReview = ({ step }) => {
  const { state } = useStateMachine(updateAction)
  if (step !== -1) {
    return null
  }

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

export default ContactFormReview
