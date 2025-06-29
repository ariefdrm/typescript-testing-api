import { client } from "../configs/db";

export async function getEmailFromDb(
  email: string,
): Promise<Array<{ email: string }>> {
  const query = "SELECT email FROM users WHERE email = $1;";

  const result = await client.query(query, [email]);
  return result.rows;
}
