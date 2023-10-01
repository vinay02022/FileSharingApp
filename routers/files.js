const router=require('express').Router;
const multer=require('multer')
const path=require('path')

//basic config multer
// Define the storage engine and destination for uploaded files
const storage = multer.diskStorage(
    {
    destination: (req, file, callback) => {
      callback(null, './uploads/');//iska pehla perameter err hota h , jb err nhi h to null pass, dusra location jha file jha store krni ho
    },
    filename: (req, file, callback) => {//y unique file name genrate krta h
      const ext = path.extname(file.originalname);
      const uniqueName=`${file.fieldname}-${Date.now()}${ext}`;
      callback(null,uniqueName);
    },
  });
  let   upload = multer({ 
    storage: storage,
    limits:{fieldSize:100000000} 
}).single('');
  

//Validation of REquest
router.post('/api/files',(req,res)=>{
    if(!req.file){
        return res.status(401).send({message:'No file uploaded'});
    }
})
//Storing Data on DB Folder
upload(req,res,(err)=>{
    if(err){
        return res.status(500).rend({error:err.message})
    }
       //storing in Database CLoud


})







//REsponse download link 


