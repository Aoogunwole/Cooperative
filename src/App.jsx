import Routes from "./routes"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Homepage from "./pages/Homepage"

function App() {
  const queryClient = new QueryClient()

  return (
    
    <QueryClientProvider client={queryClient}>
      <ToastContainer autoClose={2000}/>
        <Routes/>

    </QueryClientProvider>
  )
}

export default App
