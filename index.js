const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Posts = require('./models/post')


mongoose.connect('mongodb+srv://crudUser:crudPass@cluster0-fdmkk.mongodb.net/records?retryWrites=true', { useNewUrlParser: true,
useCreateIndex: true }, ()=>{
 console.log('Connected to the database');
})
// mongoose.connect('mongodb+srv://user-forRecord:pass-forRecord@records-upprr.mongodb.net/records?retryWrites=true', { useNewUrlParser: true,
// useCreateIndex: true }, ()=>{
//  console.log('Connected to the database');
// })
// mongoose.connect('mongodb://localhost/records', { useNewUrlParser: true,
// useCreateIndex: true }, ()=>{
//  console.log('Connected to the database');
// })

mongoose.set('useFindAndModify', false)

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/posts', (req, res)=>{
  Posts.find()
    .exec((err, users)=>{
    if (err) {
      console.log('Error has occurred')
    }else {
      res.json(users)
    }
  })
})
/*
const posts = {
  title:"Gamblers",
  body:"Real story about gamblers"
}
*/
app.post('/api/post', (req, res)=>{
  const {title, body} = req.body
  Posts.create({title, body}, (err, user)=>{
    if (err) {
      console.log(`Data wasn't added`);
    }else{
      console.log("data added");
      res.json(user)
    }
   })
})

app.delete('/api/post/:id', (req, res)=>{
  console.log(req.params);
  Posts.findOneAndDelete({_id:req.params.id}, (err, user)=>{
    if (err) {
      console.log(`Data wasn't deleted`)
    }else{
      console.log("data deleted")
      res.json(user)
    }
   })
})

app.put('/api/post/', (req, res)=>{
  console.log(req.body);
  Posts.findOneAndUpdate({_id:req.body.id}, {$set: {
    title:req.body.title, body:req.body.body
  }}, {upsert:false}, (err, user)=>{
    if (err) {
      console.log(`Data wasn't updated`)
    }else{
      console.log("data updated")
      res.json(user)
    }
  })
})

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('posts/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'posts', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>console.log(`The server is port ${PORT}`))
