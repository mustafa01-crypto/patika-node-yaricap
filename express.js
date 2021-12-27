const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  
    
    const url = ctx.url;
    if(url === "/index")
    {
        ctx.body = "index e hoşgeldin";
    }
    else if(url === "/hakimda")
    {
        ctx.body = "hakkımdaya hoşgeldin";
    }
    else if(url === "/iletisim")
    {
        ctx.body = "İletisime hoşgeldiniz";
    }
  
});



app.listen(3000);