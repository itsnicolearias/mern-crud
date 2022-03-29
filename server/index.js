
import { connectDB } from './database/db.js'
import app from './app.js'



connectDB()



app.listen(4000)
console.log('server is running')

//asi queda separado el codigo de express, el codigo dela base de datos y el codigo de la configuracion