import { Button } from '@mui/material'
import React, { FC, ReactNode } from 'react'

type Props = {
  icon: ReactNode
  children: JSX.Element
}

const CustomButton: FC<Props> = ({ icon, children }) => {
  return (
    <Button
      sx={{
        mx: '1.25rem',
        px: '1.25rem',
        py: '0.875rem',
        bgColor: '005ff8',
        textTransform: 'initial',
        '& .MuiButton-endIcon': {
          marginLeft: 'auto',
        },
      }}
      variant='contained'
      endIcon={icon}
    >
      {children}
    </Button>
  )
}

export default CustomButton
