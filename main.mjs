import dotenv from 'dotenv';
if(process.env.NODE_ENV !== 'production'){
    dotenv.config();    
}

import express from 'express';
const app = express();
const port = process.env.PORT;

//Routes import
import userRoutes from './routers/users.mjs';



//Routes definitions
app.use('/users', userRoutes);



app.listen(port, () => {
console.log("Server running on port: "+port);
})