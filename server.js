const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });  //configure the environments variables

const DB = process.env.DB_WITH_PASS; //do not use"-(hyphen)" use "_(underScore) while creating environments variables"
const app = require('./app');

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('connected to DataBase successfully');
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log('App server is running');
});
