const mongoose=require('mongoose')
const connection=main().catch(err => console.log(err,"Failedddd...."));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todoss');
  console.log("DataBase Connected.....");
}
module.exports=connection