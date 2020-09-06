import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production'){
    dotenv.config();    
}

import express from 'express';
const app = express();
const port = process.env.PORT;

//bring routers
import userRoutes from './routers/users.mjs';


//Routes
app.use('/users', userRoutes);



app.listen(port, () => {
console.log("Server running on port: "+port);
})