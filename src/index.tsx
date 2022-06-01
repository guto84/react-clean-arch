import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { store } from 'application/store/root'
import Routes from 'main/app/routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>
)
