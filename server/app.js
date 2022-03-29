//archivo que configuura express
import express from 'express'
import postsRoutes from './routes/posts.routes.js'


const app = express()

//middleware
app.use(express.json())

//route
app.use(postsRoutes)

export default app;