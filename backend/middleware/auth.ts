import { Request,Response,NextFunction } from "express"
import { getAuth } from "@clerk/express"

export const auth=(req:Request,res:Response,next:NextFunction)=>{
     const { isAuthenticated, userId } = getAuth(req)

  if (!isAuthenticated) {
    res.status(401).json({ error: 'Unauthorized' })
    return
}
else{
    req.body.userId=userId
    next()
}
}
