const express=require('express');
const cors=require('cors');
const mongo=require('mongoose');
const connection=require('./database/connection');
const routes=require('./routes/authRoutes')
const app=express();
 	  app.use(cors());
 	  app.use(express.json())


// routes

app.use('/auth',routes);

// routes




app.get('/',(req,res,next)=>{
	res.send('nothing should be found at this request');
})

const port=3000;

app.listen(port,()=>{
	console.log(`Server is running on Port ${port}`);
})
