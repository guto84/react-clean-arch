import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import Routes from './main/app/routes'
import { store } from './main/data/root'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>
)
