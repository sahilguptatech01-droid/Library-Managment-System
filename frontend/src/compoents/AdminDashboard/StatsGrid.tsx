
import StatsCard from "./StatsCard"

interface Stats{
  revenue:number ,
  count:number
}

const StatsGrid = ({revenue,count}:Stats) => {



  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 xl:grid-cols-3">

            <StatsCard
            title="Revenue"
            value={revenue ? revenue : 0} 
            />

            <StatsCard
            title="Students"
            value={count? count: 0} 
            />

            <StatsCard
            title="Notifications"
            value={0}
            />

    </div>
  )
}

export default StatsGrid