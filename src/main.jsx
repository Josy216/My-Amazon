import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './utils/Reducer.jsx'

createRoot(document.getElementById('root')).render(
    <DataProvider reducer={reducer} initialState={initialState}>


        <App />
    </DataProvider>
)
