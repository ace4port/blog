import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

const Error = ({ show, message }) => {
  const [open, setOpen] = useState(show)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert elevation={6} variant='filled' onClose={handleClose} severity='error'>
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default Error
