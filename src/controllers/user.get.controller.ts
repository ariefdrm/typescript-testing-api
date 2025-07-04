import { Request, Response } from "express";
import { client } from "../configs/db";

export const getAllUsers = async (_req: Request, res: Response) => {
  const query: string = "SELECT id, email FROM users";

  try {
    const result = await client.query(query);

    res.status(200).json({
      message: "SUCCESS",
      data: result.rows,
    });
  } catch (error) {
    throw error;
  }
};
