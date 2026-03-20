 const express = require('express');
 const connectMongoDb = require('./connect');
 const urlRoutes = require('./routes/url');
 const URL = require('./models/url');
 
 
 
 const app = express();
 const port = 3000;
 connectMongoDb('mongodb://localhost:27017/url-shortener')
 .then(() => {
     console.log('Connected to MongoDB');
    })
    
    app.use(express.json());
    app.use("/url", urlRoutes);
    
    app.listen(port, () => {  
        console.log(`Example app listening on port ${port}`);
    });  

    app.get('/:shortId', async (req, res) => {  
        const shortId = req.params.shortId;
        const entry =await URL.findOneAndUpdate({shortId},
            {$push:{visitHistory:
            {timestamp:Date.now()}}})

            res.redirect(entry.redirectUrl);

    });

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });