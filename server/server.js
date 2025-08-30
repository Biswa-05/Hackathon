import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import AdminRouter from './routes/AdminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app= express();

await connectDB();

//Middleware
app.use(cors());
app.use(express.json());

//Routes 

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.use('/api/admin',AdminRouter)
app.use('/api/blog',blogRouter)
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running on port"+PORT);
})

export default app;
