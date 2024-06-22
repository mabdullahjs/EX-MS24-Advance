import { Button } from '@mui/material'
import React from 'react'

const CustomBtn = ({title , variant}) => {
  return (
    <>
    <Button variant={variant}>{title}</Button>
    </>
  )
}

export default CustomBtn