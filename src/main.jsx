import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { Provider } from 'react-redux'
import ReduxStore from './ReduxStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ReduxStore}>
    <RouterProvider router={MainRoutes}/>
    </Provider>
  </StrictMode>,
)
