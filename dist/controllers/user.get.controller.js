"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const db_1 = require("../configs/db");
const getAllUsers = async (_req, res) => {
    const query = "SELECT * FROM users";
    try {
        const result = await db_1.client.query(query);
        res.status(200).json(result.rows);
    }
    catch (error) {
        throw error;
    }
};
exports.getAllUsers = getAllUsers;
