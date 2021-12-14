import React, { Component } from 'react'
import { Button } from '@material-ui/core'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: false, errorInfo: null, location: this.props.location }
    }

    // Update state so the next render will show the fallback UI.
    // static getDerivedStateFromError(error) {
    //     console.log('Error from: ', this.props.location)
    //     return { hasError: true }
    // }

    componentDidCatch(error, errorInfo) {
        console.log('Error from: ', this.state.location)
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
        // You can also log error messages to an error reporting service here like- logErrorToMyService(error, errorInfo);
    }

    render() {
        // Custom fallback UI
        if (this.state.errorInfo) {
            return (
                <div
                    style={{
                        display: 'flex',
                        minHeight: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <h1>Something went wrong.</h1>
                    <h3>at {this.state.location}</h3>
                    <br />
                    <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
                        Reload ?
                    </Button>
                    <br />
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
