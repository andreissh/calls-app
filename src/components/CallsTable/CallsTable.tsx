import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(
  name1: string,
  name2: string,
  name3: string,
  name4: string,
  name5: string,
  name6: string,
  name7: string
) {
  return { name1, name2, name3, name4, name5, name6, name7 }
}

const rows = [
  createData('type', 'test', 'test', 'test', 'test', 'test', 'test'),
]

const CallsTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: '0px 4px 5px #e9edf3', borderRadius: '8px' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Тип</TableCell>
            <TableCell align='left'>Время</TableCell>
            <TableCell align='left'>Сотрудник</TableCell>
            <TableCell align='left'>Звонок</TableCell>
            <TableCell align='left'>Источник</TableCell>
            <TableCell align='left'>Оценка</TableCell>
            <TableCell align='left'>Длительность</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{row.name1}</TableCell>
              <TableCell align='left'>{row.name2}</TableCell>
              <TableCell align='left'>{row.name3}</TableCell>
              <TableCell align='left'>{row.name4}</TableCell>
              <TableCell align='left'>{row.name5}</TableCell>
              <TableCell align='left'>{row.name6}</TableCell>
              <TableCell align='left'>{row.name7}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CallsTable
