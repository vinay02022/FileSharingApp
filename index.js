const express=require('express')
const mongoose=require('mongoose');
// const db=require('connectDb')
const app=express();
app.use(bodyParser.json())
//dataBase Connection vha file m kra alag se aur yha import use
require('./config/dataBase')
const PORT=process.env.PORT || 3000;

const routefile=require('./routers/files')


app.use('/api/files',routefile)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})