"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailFromDb = getEmailFromDb;
const db_1 = require("../configs/db");
async function getEmailFromDb(email) {
    const query = "SELECT email FROM users WHERE email = $1;";
    const result = await db_1.client.query(query, [email]);
    return result.rows;
}
