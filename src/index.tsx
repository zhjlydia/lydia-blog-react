import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './styles/base.less'
import routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
