const express = require ('express')
const app = express()

app.get('/', (req,res)=>res.send('Hello World!'))
app.listen(PORT, HOST, () => { 
    console.log('Running on http://${HOST}:${PORT}');
    console.log('New image for dashboard');
  }); 
