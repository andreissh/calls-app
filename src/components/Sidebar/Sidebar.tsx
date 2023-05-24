import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ErrorIcon from '@mui/icons-material/Error'

import { sidebarTabs } from './SidebarIcons'
import CustomButton from '../../common/Button/CustomButton'
import { drawerWidth } from '../../utils/consts'
import Logo from '../icons/Logo'

interface Props {
  window?: () => Window
  mobileOpen: boolean
  onDrawerToggle: () => void
}

const Sidebar: React.FC<Props> = ({ window, mobileOpen, onDrawerToggle }) => {
  const [isActiveTab, setActiveTab] = React.useState<string>('Звонки')

  const drawer = (
    <div>
      <Toolbar>
        <Logo />
      </Toolbar>
      <List sx={{ mb: '56px' }}>
        {Object.keys(sidebarTabs).map((text, index) =>
          text === isActiveTab ? (
            <ListItem
              key={text}
              disablePadding
              sx={{
                position: 'relative',
                borderLeft: '3px solid #002cfb',
                backgroundColor: 'rgba(216, 228, 251, 0.32)',
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: '#fff' }}>
                  {Object.values(sidebarTabs)[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: '#fff' }} />
              </ListItemButton>
              <span
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '12px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd500',
                  boxShadow: '0px 3px 8px rgba(237, 218, 1, 0.5)',
                }}
              ></span>
            </ListItem>
          ) : (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  {Object.values(sidebarTabs)[index]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
        <CustomButton
          icon={
            <AddCircleIcon
              sx={{
                width: 24,
                height: 24,
                margin: 0,
                opacity: 0.56,
              }}
            />
          }
        >
          <Typography sx={{ m: '0 auto' }}>Добавить заказ</Typography>
        </CustomButton>
        <CustomButton
          icon={
            <ErrorIcon
              sx={{
                width: 24,
                height: 24,
                margin: 0,
                opacity: 0.56,
              }}
            />
          }
        >
          <Typography sx={{ m: '0 auto' }}>Оплата</Typography>
        </CustomButton>
      </Box>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#091336',
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#091336',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
