import { Request, Response, NextFunction } from "express";
import { clerkClient, getAuth } from "@clerk/express";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { isAuthenticated, userId } = getAuth(req);

  if (!isAuthenticated) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (userId) {
    const user = await clerkClient.users.getUser(userId as string);
    const email = user.emailAddresses[0]?.emailAddress;
    res.locals.email = email;
    res.locals.userId = userId;
    next();
   
  }
  
};
