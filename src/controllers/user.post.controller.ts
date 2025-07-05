import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { client } from "../configs/db";

type User = {
  email: string;
  password: string;
};

const postUser = async (req: Request, res: Response) => {
  const { email, password }: User = req.body;
  const saltRounds: number = 10;

  try {
    bcrypt.hash(password, saltRounds, async (_err, hash) => {
      const query: string = `INSERT INTO users (email, password) VALUES ('$1', '$2')`;

      await client.query(query, [email, hash]);
    });

    // set Content-Type to application/json
    res.set({
      "Content-Type": "application/json",
    });

    res
      .status(201)
      .json({ message: "User created successfully", data: { email } });
  } catch (error) {
    throw error;
  }
};

const loginUserByEmail = async (req: Request, res: Response) => {
  const { email, password }: User = req.body;
  const query: string = "SELECT * FROM users WHERE email = $1";

  try {
    res.set({
      "Content-Type": "application/json",
    });

    if (!email || !password) {
      res.status(400).json({ message: "Email dan password harus diisi." });
    }

    const response = await client.query(query, [email]);

    if (response.rows.length === 0) {
      res.status(404).json({ message: "Email salah" });
      return;
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      response.rows[0].password,
    );

    if (isPasswordMatch) {
      res.status(200).json({
        message: "User found",
        data: {
          id: response.rows[0].id,
          email: response.rows[0].email,
        },
      });
    } else {
      res.status(401).json({ message: "Password salah" });
    }
  } catch (error) {
    throw error;
  }
};

export { postUser, loginUserByEmail };
