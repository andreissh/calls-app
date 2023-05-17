import { Box } from '@mui/material'
import React from 'react'
import Chip from '@mui/material/Chip/Chip'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const BalanceRow = () => {
  return (
    <Box sx={{ py: 2.5, display: 'flex', justifyContent: 'end' }}>
      <Chip
        sx={{
          backgroundColor: '#fff',
          minHeight: '40px',
          borderRadius: '48px',
          marginRight: '48px',
        }}
        icon={
          <AddCircleIcon
            sx={{
              order: 2,
              '&.MuiChip-icon': { marginRight: '6px', color: '#005ff8' },
            }}
          />
        }
        label={'Баланс: 272р.'}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker slotProps={{ textField: { size: 'small' } }} />
      </LocalizationProvider>
    </Box>
  )
}

export default BalanceRow
