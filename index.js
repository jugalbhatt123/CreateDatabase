var mongoose = require('mongoose')

// DataBase Config
const db = require('./keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express()
const port = process.env.PORT||3000



app.use(express.json())
app.listen(port,()=>{
    console.log('Server is up on port'+port)
})
