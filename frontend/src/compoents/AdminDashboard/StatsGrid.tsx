
import StatsCard from "./StatsCard"

interface Stats{
  revenue:number ,
  count:number
}

const StatsGrid = ({revenue,count}:Stats) => {



  return (
<div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:gap-5 sm:p-6 xl:grid-cols-3">

  <StatsCard
    title="Revenue"
    value={revenue || 0}
  />

  <StatsCard
    title="Students"
    value={count || 0}
  />

  <StatsCard
    title="Notifications"
    value={0}
  />

</div>
  )
}

export default StatsGrid