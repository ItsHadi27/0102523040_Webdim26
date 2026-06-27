import db from "./config/database";

async function testConnection() {
    try {
        const conn = await db.getConnection();
        console.log("Database berhasil terkoneksi!");
        conn.release();
    } catch (err) {
        console.error("Gagal koneksi database:", err);
    }
}

testConnection();