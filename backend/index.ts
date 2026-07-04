import express,{Router} from  "express"
import cors from "cors"

const app=express()
app.use(express.json())
app.use(cors())
