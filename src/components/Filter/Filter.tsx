import React from 'react'
import { Box, TextField } from '@mui/material'
import CustomSelect from '../../common/Select/CustomSelect'

const Filter = () => {
  return (
    <Box
      sx={{
        py: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TextField
        inputProps={{
          style: {
            height: '48px',
            boxSizing: 'border-box',
            padding: '12px 18px',
          },
        }}
      />
      <Box sx={{ display: 'flex', columnGap: '32px' }}>
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
        <CustomSelect />
      </Box>
    </Box>
  )
}

export default Filter
