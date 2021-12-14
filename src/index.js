import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ErrorBoundary from './components/misc/ErrorBoundary'
import Routes from './routes'
import store from './redux/store'
import './index.scss'

const App = () => <Routes />

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary location="global">
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
)
