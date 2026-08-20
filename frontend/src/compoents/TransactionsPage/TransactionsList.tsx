import TransactionCard from "./TransactionsCard";
import CardSkeleton from "../CardSkeleton";
import GlobalError from "../GlobalError";



export  interface Transaction{
  id:string,
  name:string,
  amount:string,
  month:string,
  paymentDate:string,
  student:{name:string},
}

 interface TransactionListProps{
  transactions:Transaction[],
  isLoading:boolean,
  isError:boolean
}
export default function TransactionList({ transactions, isLoading, isError }:TransactionListProps) {
  
  if (isLoading) {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </>
    );
  }

  if (isError) {
    return <GlobalError />;
  }

  if (!transactions.length) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 py-24 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl">
          💳
        </div>

        <h2 className="text-xl font-semibold">No Transactions Yet</h2>

        <p className="mt-2 text-sm text-zinc-400">
          Fee payments will appear here once students start paying.
        </p>
      </div>
    );
  }


  return (
<div className="space-y-3 sm:space-y-4">
  {transactions.map((transaction) => (
    <TransactionCard
      key={transaction.id}
      transaction={transaction}
    />
  ))}
</div>
  );
}
