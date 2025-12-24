import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

//perintah koneksi
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

//jalankan koneksi databasenya
db.connect((err) => {
    //jika ada eror
    if (err) {
        console.error("Error Koneksi Database", err);
        return;
    }

    //jika berhasil
    console.log("MySQL berhasil connect!");
});

export default db;