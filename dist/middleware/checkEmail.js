"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkExistingEmail = checkExistingEmail;
const getDataFromDb_1 = require("../utils/getDataFromDb");
async function checkExistingEmail(req, res, next) {
    const { email } = req.body;
    const existingEmail = await (0, getDataFromDb_1.getEmailFromDb)(email);
    try {
        if (existingEmail.length > 0) {
            res.status(200).json({
                message: "Email already exists",
                email: existingEmail[0].email,
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        throw error;
    }
}
