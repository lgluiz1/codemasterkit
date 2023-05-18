import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Main from './components/main'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export function App() {
  

  return (
    <>
    <Header/>
    <Main/>
  </>
  )
}

