import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes.jsx'
import { Provider } from 'react-redux'
import ReduxStore, { persistor } from './ReduxStore.jsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={ReduxStore}>
      <PersistGate persistor={persistor}>
    <RouterProvider router={MainRoutes}/>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
