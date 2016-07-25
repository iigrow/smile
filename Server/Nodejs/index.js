var app = require('koa')();

app.use(function *(){
  console.log('accept request')
  this.body = 'Hello world';
})

app.listen(3000);
