import express,{Router} from  "express"
import cors from "cors"
import { router as libararyRoute } from "./routes/library.routes"
import { createLibrary } from "./controller/library.controller"


const app=express()
app.use(express.json())
app.use(cors())

app.use('/libraries',libararyRoute)





app.listen(3000,()=>{
    console.log("Server is running");
    
})