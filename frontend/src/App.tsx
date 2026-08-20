import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Create from './pages/CreateLibrary'
import Card from './compoents/Card'
import AdminDahboard from './pages/AdminDahboard'
import CreateStudent from './pages/CreateStudent'
import EditStudent from './pages/EditStudent'
import ProtectedRoute from './routes/ProtectedRoute'
import Payment from './pages/Payment'
import TransactionHistory from './pages/TransactionHistory'
import StudentsPage from './pages/StudentsPage'
import TransactionsPage from './pages/TransactionsPage'
import SignInPage from './pages/SignInPage'
import OfflineScreen from './compoents/OfflineScreen'
import SignUpPage from './pages/SignUpPage'
import CreateShift from './pages/CreateShift'




const queryClient = new QueryClient({defaultOptions:{
  queries:{retry:3}
}})


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
  

  if(!navigator.onLine){
    return <OfflineScreen/>
  }


  return (

<QueryClientProvider client={queryClient}>
    <BrowserRouter>
     <Routes>
        {/* <Route path="/home" element={<Home/>}/>  */}

        <Route path="/create" element={<Create/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/> 
        <Route path="/" element={<SignUpPage/>}/> 

        

        {/* Protected Route */}
        <Route element={<ProtectedRoute/>}>        
        <Route path="/create/shift" element={<CreateShift/>}/>
        <Route path="/students" element={<StudentsPage/>}/>
        <Route path="/transactions" element={<TransactionsPage/>}/>
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
