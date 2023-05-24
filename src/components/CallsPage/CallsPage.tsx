import * as React from 'react'
import BalanceRow from '../BalanceRow/BalanceRow'
import Filter from '../Filter/Filter'
import CallsTable from '../CallsTable/CallsTable'
import { Box } from '@mui/material'

const CallsPage = () => {
  return (
    <Box sx={{ maxWidth: 1440, margin: '0 auto' }}>
      <BalanceRow />
      <Filter />
      <CallsTable />
    </Box>
  )
}

export default CallsPage
