import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/CreateLibrary'
import Card from './compoents/Card'
import AdminDahboard from './pages/AdminDahboard'
import CreateStudent from './pages/CreateStudent'
import EditStudent from './pages/EditStudent'
import ProtectedRoute from './routes/ProtectedRoute'
import SignUpPage from './pages/SignUpPage'
import Payment from './pages/Payment'
import TransactionHistory from './pages/TransactionHistory'
import StudentsPage from './pages/StudentsPage'






const queryClient = new QueryClient()


// To use tanstack dev tools
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__:
      import('@tanstack/query-core')
        .QueryClient
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient

// 

export default function App() {
  return (

<QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/sign-up" element={<SignUpPage/>}/> 
        <Route path="/create" element={<Create/>}/>
        

        {/* Protected Route */}
        <Route element={<ProtectedRoute/>}>        
        <Route path="/students" element={<StudentsPage/>}/>
        <Route path="/payment/:id" element={<Payment/>}/>
        <Route path="/details/:id" element={<Card/>}/>
        <Route path="/dashboard" element={<AdminDahboard/>}/>
        <Route path="/add/student" element={<CreateStudent/>}/>
        <Route path="/edit/student/:id" element={< EditStudent/>}/>
        <Route path="/transactions/:id" element={< TransactionHistory/>}/>
       </Route>
        

    
     </Routes>
    </BrowserRouter>
</QueryClientProvider>
  )
}
