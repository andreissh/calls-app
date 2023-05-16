import * as React from 'react'
import BalanceRow from '../BalanceRow/BalanceRow'
import Filter from '../Filter/Filter'
import CallsTable from '../CallsTable/CallsTable'

const CallsPage = () => {
  return (
    <>
      <BalanceRow />
      <Filter />
      <CallsTable />
    </>
  )
}

export default CallsPage
