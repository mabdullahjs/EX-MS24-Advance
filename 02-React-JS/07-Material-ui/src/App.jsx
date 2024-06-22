import React from 'react'
import CustomBtn from './components/Button'
import { Box, TextField, Typography } from '@mui/material'
import ResponsiveAppBar from './components/Navbar'

const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
      <Typography className='text-center mt-5' variant='h3'>Hello world!</Typography>
      <Box className="d-flex justify-content-center gap-5 mt-5">
        <CustomBtn title="Hello" variant="outlined" />
        <CustomBtn title="Hello2" variant="contained" />
        <CustomBtn title="Hello3" variant="text" />
      </Box>
      <Box className="text-center mt-5">
      <TextField id="outlined-basic" type='email' label="Email" variant="outlined" />

      </Box>
    </>
  )
}

export default App