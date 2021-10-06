const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


const listItems = [];

app.get('/', function(req,res){

  const day = date.getDate();

  res.render("list", {kindOfDay: day, newItemLists: listItems});

})

app.get('/about', function(req,res){
  res.render("about")
})


app.post('/', function(req,res) {
  const item = req.body.newItem;
  listItems.push(item);
  res.redirect('/');
})

app.listen(3000, function () {
  console.log("server is running");
});
