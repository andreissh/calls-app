import React from 'react'
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

export const sidebarTabs = {
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
