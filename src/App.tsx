import React from 'react'
import CallsPage from './components/CallsPage/CallsPage'
import PageContainer from './components/containers/PageContainer/PageContainer'
import { ThemeProvider } from '@mui/material'
import { mainTheme } from './utils/theme'
import './App.css'

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <PageContainer>
        <CallsPage />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
