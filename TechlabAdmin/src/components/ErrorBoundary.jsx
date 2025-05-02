import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Log the error to an error reporting service
        console.error("Error caught in ErrorBoundary: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div className='w-full h-screen flex justify-center items-center border'><h1 className=''>Something went wrong...</h1> </div>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;