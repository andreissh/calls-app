import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import { drawerWidth } from '../../utils/consts'
import Logo from '../icons/Logo'
import TimelineIcon from '@mui/icons-material/Timeline'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

interface Props {
  window?: () => Window
  mobileOpen: boolean
  onDrawerToggle: () => void
}

const tabs = {
  Итоги: <TimelineIcon />,
  Заказы: <DoneAllIcon />,
  Сообщения: <MailOutlineIcon />,
  Звонки: <PhoneOutlinedIcon />,
  Контрагенты: <PeopleOutlineOutlinedIcon />,
  Документы: <DescriptionOutlinedIcon />,
  Исполнители: <PermIdentityOutlinedIcon />,
  Отчеты: <WorkOutlineOutlinedIcon />,
  'База знаний': <LocalLibraryOutlinedIcon />,
  Настройки: <SettingsOutlinedIcon />,
}

const Sidebar: React.FC<Props> = ({ window, mobileOpen, onDrawerToggle }) => {
  const drawer = (
    <div>
      <Toolbar>
        <Logo />
      </Toolbar>
      <List>
        {Object.keys(tabs).map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                {Object.values(tabs)[index]}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ color: 'rgba(255, 255, 255, 0.6)' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
