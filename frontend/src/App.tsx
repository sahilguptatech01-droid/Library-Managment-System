import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/CreateLibrary'
import Card from './compoents/Card'
import AdminDahboard from './pages/AdminDahboard'






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
        <Route path="/details/:id" element={<Card/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/dashboard" element={<AdminDahboard/>}/>
        {/* <Route path="/add/student" element={<AddStudent/>}/>
        <Route path="/edit/student/:id" element={< EditStudent/>}/> */}
        

    
     </Routes>
    </BrowserRouter>
</QueryClientProvider>
  )
}
