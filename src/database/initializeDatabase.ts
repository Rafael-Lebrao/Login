import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {

    await database.execAsync(`
        
        CREATE TABLE IF NOT EXISTS usuario (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            senha TEXT NOT NULL
        );
        
        
    `)
    
}