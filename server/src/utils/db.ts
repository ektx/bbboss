import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.resolve(__dirname, '../../db/main.db')

export const DB = () => new Database(dbPath, { verbose: console.log })
