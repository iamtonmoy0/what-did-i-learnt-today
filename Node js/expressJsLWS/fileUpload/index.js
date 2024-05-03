const express = require('express');
const multer =require('multer');

const filePath='./data/';
// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, filePath);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});
const upload=multer({
	storage:storage,
	limits:{
		fileSize:1000000 //1mb
	},
	fileFilter:(req,file,cb)=>{
		if(file.mimetype === 'image/jpg' ){
			cb(null,true)
		}else{
			cb(new Error('file type should be jpg'))
		}
	}
})
const app=express();


app.post('/',upload.single('avatar'),(req,res)=>{
	res.send('file uploaded')

})


app.get('/',(req,res)=>{
	res.send('hello world')
})
// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(3000,console.log('server is running on port 3000'))