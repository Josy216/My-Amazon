import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './components/DataProvider/DataProvider.jsx'
import { initialState, reducer } from './utils/Reducer.jsx'

createRoot(document.getElementById('root')).render(
    // <HashRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
        <App />
    </DataProvider>
)
