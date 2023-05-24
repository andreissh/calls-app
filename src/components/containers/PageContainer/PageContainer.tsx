import * as React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Navbar from '../../Navbar/Navbar'
import Sidebar from '../../Sidebar/Sidebar'
import { drawerWidth } from '../../../utils/consts'

type Props = {
  children: React.ReactElement
}

const PageContainer: React.FC<Props> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar onDrawerToggle={handleDrawerToggle} />
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Sidebar mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          px: 15,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          boxSizing: 'content-box',
          minHeight: '100vh',
          backgroundColor: '#f1f4f9',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

export default PageContainer
