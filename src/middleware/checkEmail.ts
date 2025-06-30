import { NextFunction, Request, Response } from "express";
import { getEmailFromDb } from "../utils/getDataFromDb";

async function checkEmailAlreadyRegister(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { email }: { email: string } = req.body;
  const existingEmail = await getEmailFromDb(email);

  try {
    if (existingEmail.length > 0) {
      res.status(200).json({
        message: "Email already exists",
        data: {
          email: existingEmail[0].email,
        },
      });
    } else {
      next();
    }
  } catch (error) {
    throw error;
  }
}

export { checkEmailAlreadyRegister };
