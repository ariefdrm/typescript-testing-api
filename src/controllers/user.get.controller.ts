import { Request, Response } from "express";
import { client } from "../configs/db";

const getAllUsers = async (_req: Request, res: Response) => {
  const query: string = "SELECT * FROM users";

  try {
    const result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

export { getAllUsers };
