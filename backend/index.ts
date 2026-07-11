import express,{Router} from  "express"
import cors from "cors"
import { router as libararyRoute } from "./routes/library.routes"
import { router as shiftRouter } from "./routes/shift.routes"
import { router as studentRoute } from "./routes/student.routes"
import { router as feesRoute } from "./routes/fee.routes"


const app=express()
app.use(express.json())
app.use(cors())

app.use('/libraries',libararyRoute)
app.use('/shifts',shiftRouter)
app.use('/students',studentRoute)
app.use('/fees',feesRoute)





app.listen(3000,()=>{
    console.log("Server is running");
    
})