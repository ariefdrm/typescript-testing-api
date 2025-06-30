import { Request, Response } from "express";
import { client } from "../configs/db";

type User = {
  id: number;
  email: string;
};

const getAllUsers = async (_req: Request, res: Response) => {
  const query: string = "SELECT * FROM users";
  const values: Array<User> = [];

  try {
    const result = await client.query(query);

    result.rows.forEach((user: User) => {
      values.push({ id: user.id, email: user.email });
    });

    res.status(200).json({
      data: values,
    });
  } catch (error) {
    throw error;
  }
};

export { getAllUsers };
