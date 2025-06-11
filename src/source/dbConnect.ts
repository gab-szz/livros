import mongoose, { mongo } from "mongoose";
import "dotenv/config"; // carrega o .env automaticamente

async function initDB() {
    const uri = process.env.DB_CONNECTION_STRING;

    if (!uri) {
        throw new Error("Variável DB_CONNECTION_STRING não definida no .env");
    }

    mongoose.connect(uri)

    return mongoose.connection;
}

export default initDB;
