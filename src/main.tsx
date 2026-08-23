import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { worker } from './api/browser'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }
  return worker.start({ onUnhandledRequest: 'bypass' })
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
