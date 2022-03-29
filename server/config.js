import dotenv from 'dotenv'

dotenv.config()


export const MONGODB_URI = process.env.URI || "mongodb://localhost/testdb"
