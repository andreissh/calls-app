import React, { FC } from 'react'
import { AppBar, IconButton, MenuItem, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerWidth } from '../../utils/consts'
import Typography from '@mui/material/Typography/Typography'
import TextField from '@mui/material/TextField/TextField'
import Box from '@mui/material/Box/Box'
import Select from '@mui/material/Select/Select'
import InputLabel from '@mui/material/InputLabel/InputLabel'
import FormControl from '@mui/material/FormControl'
import HeaderStatsElement from '../../common/HeaderStatsElement/HeaderStatsElement'

type Props = {
  onDrawerToggle: () => void
}

const Navbar: FC<Props> = ({ onDrawerToggle }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        maxHeight: 64,
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ backgroundColor: '#fff' }}>
        <Box
          sx={{
            maxWidth: 1440,
            width: '100%',
            maxHeight: '64px',
            display: 'flex',
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          <IconButton
            aria-label='open drawer'
            edge='start'
            onClick={onDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ minWidth: '100px', marginRight: '86px', color: '#899CB1' }}
          >
            Среда, 13 окт
          </Typography>
          <Box sx={{ display: 'flex', marginRight: '20px' }}>
            <HeaderStatsElement />
            <HeaderStatsElement />
            <HeaderStatsElement />
          </Box>
          <TextField sx={{ marginRight: '56px' }} />
          <FormControl fullWidth sx={{ marginRight: '40px' }}>
            <InputLabel id='demo-simple-select-label'>Select option</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Age'
            >
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
            </Select>
          </FormControl>
          <Select labelId='demo-simple-select-label' />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
