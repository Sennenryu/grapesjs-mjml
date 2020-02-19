var path = require('path');
var express = require('express');
var app = express();
const fs = require('fs')

var dir = path.join(__dirname);
var myRouter = express.Router(); 

myRouter.route('/')
.get(function(req, res) {

  res.json({
    message : "Template " + n + " chargé", 
    methode : content
  });
})

.post(function(req, res) {
    res.json({
      message : "Ajout du template",
      methode : template,
      counter : counter});

      const book = req.body;

      // Output the book to the console for debugging
      console.log(book);
      books.push(book);
  
      res.send('Book is added to the database');
  

      fs.writeFileSync('/templates/template ' + counter, template);
   
});

app.use(express.static(dir));
app.use(myRouter); 

app.listen(8079, function () {
  console.log('Listening on http://localhost:8079/');
});

/*
function oui () {
  var dir = '/templates';
    
  fs.readdir(dir, (err, files) => {
    var n = files.length;
  });

  console.log("xd " + n);

  for (var i=0; i<n; i++){

    fs.readFile('/templates/template ' + n, function read(err, data) {
      if (err) {
          throw err;
      }
      content = data;
      console.log(content);
  });
  }
}


function non (){

  fs.writeFileSync('/templates/template ' + counter, template);

}

*/



/*
require("./dist/grapesjs-mjml.min.js");
require("./dist/grapes.js");
require("./dist/grapesjs-plugin-export.js");
require("./dist/grapesjs-custom-code.js");


function myPlugin(editor){
  editor.BlockManager.add('my-first-block', {
    label: 'Simple block',
    content: '<div class="my-block">This is a simple block</div>',
    category: 'Custom',
  });

}

var editor = grapesjs.init({
  height: '100%',
  noticeOnUnload: 0,
  storageManager: { autoload: 0 },
  container: '#gjs',
  fromElement: true,

  plugins: ['grapesjs-mjml', 'grapesjs-plugin-export', 'grapesjs-custom-code', 'myPlugin'],
  pluginsOpts: {
    'grapesjs-mjml': {},
    'grapesjs-plugin-export': {},
    'grapesjs-custom-code': {},
    'myPlugin' : {}
  }
});

window.editor = editor;*/