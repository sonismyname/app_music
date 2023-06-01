const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
const app = require('./app');

const connectString = process.env.DATABASE.replace(
  /<password>/g,
  process.env.PASSWORD
);
mongoose
  .connect(connectString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('Database connection successfully established');
  });

app.listen(8080, function () {
  console.log('APP running on port 8080');
});
