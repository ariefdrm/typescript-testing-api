"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
const pg_1 = require("pg");
dotenv_1.default.config({ path: node_path_1.default.resolve(__dirname, "../../.env") });
const client = new pg_1.Client({
    connectionString: process.env.DATABASE_URL,
});
exports.client = client;
