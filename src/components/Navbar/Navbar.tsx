import React, { FC } from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerWidth } from '../../utils/consts'

type Props = {
  onDrawerToggle: () => void
}

const Navbar: FC<Props> = ({ onDrawerToggle }) => {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ backgroundColor: '#fff' }}>
        <IconButton
          aria-label='open drawer'
          edge='start'
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
