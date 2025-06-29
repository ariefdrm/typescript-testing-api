"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserByEmail = exports.postUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../configs/db");
const postUser = async (req, res) => {
    const { email, password } = req.body;
    const saltRounds = 10;
    try {
        bcrypt_1.default.hash(password, saltRounds, async (_err, hash) => {
            const query = `INSERT INTO users (email, password) VALUES ('${email}', '${hash}')`;
            await db_1.client.query(query);
        });
        res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        throw error;
    }
};
exports.postUser = postUser;
const loginUserByEmail = async (req, res) => {
    const { email, password } = req.body;
    const query = "SELECT * FROM users WHERE email = $1";
    try {
        if (!email || !password) {
            res.status(400).json({ message: "Email dan password harus diisi." });
        }
        const response = await db_1.client.query(query, [email]);
        if (response.rows.length === 0) {
            res.status(404).json({ message: "Email salah" });
            return;
        }
        const isPasswordMatch = await bcrypt_1.default.compare(password, response.rows[0].password);
        if (isPasswordMatch) {
            res.status(200).json({
                message: "User found",
                user: {
                    id: response.rows[0].id,
                    email: response.rows[0].email,
                },
            });
        }
        else {
            res.status(401).json({ message: "Password salah" });
        }
    }
    catch (error) {
        throw error;
    }
};
exports.loginUserByEmail = loginUserByEmail;
