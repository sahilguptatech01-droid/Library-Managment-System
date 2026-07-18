
import { prisma } from "../prisma";
import { Request,Response,NextFunction } from "express";

export const requireLibrary = async (req:Request, res:Response, next:NextFunction) => {
  const library = await prisma.library.findUnique({
    where: {
      clerkUserId:res.locals.userId,
    },
    select: {
      id: true,
    },
  });

  if (!library) {
    return res.status(404).json({
      message: "Library not found",
    });
  }

  res.locals.libraryId = library.id;
  next();
};