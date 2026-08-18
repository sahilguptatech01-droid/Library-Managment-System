import TransactionFilters from "../compoents/TransactionsPage/TransactionsFilters";
import TransactionHeader from "../compoents/TransactionsPage/TransactionsHeader";
import TransactionList from "../compoents/TransactionsPage/TransactionsList";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../config";
import { getToken } from "@clerk/react";
import axios from "axios";



export default function TransactionsPage() {
  const {isLoading,isError,data}=useQuery({
    queryKey:['transaction'],
    queryFn:async()=>{
      const token=await getToken()
      const res=await axios.get(`${API_URL}/fees/all/transaction`,{
        headers:{
          Authorization: `Bearer ${token}`,

        }
      })
      return res.data
    }
    
    
  })

  

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-8">
        <TransactionHeader />

        <TransactionFilters />
        
        <TransactionList transactions={data?.transaction} isLoading={isLoading} isError={isError}/>
        
      </div>
    </div>
  );
}