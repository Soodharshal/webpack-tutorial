const express = require('express')
const path = require('path')
const fs = require('fs' )

const app = express();
app.use('/static', express.static(path.resolve(__dirname,'../dist')))

app.get('/',function(req,res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html')    
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8')
    res.send(contentFromHtmlFile)
})
app.listen(3001, function(){
    console.log("application is running in 3000")
})