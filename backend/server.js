const express = require('express');
const app = express();

const fs = require('fs');

var data;
try{
    data = fs.readFileSync('./data/ang.txt', 'UTF-8');
}catch(err){
    console.log(err)
}

var chapters = data.split('|');
chapters.forEach((el, i)=>{
    chapters[i] = el.replace(/[\r\n]/gm, '');
})
chapters.forEach((el, i)=>{
    chapters[i] = el.split(';')
})
chapters.forEach((el, i)=>{
    el.forEach((ell, ii)=>{
        el[ii] = {
            en: ell.split(' - ')[0],
            pl: ell.split(' - ')[1]
        }
    })
})

app.get('/data', (req, res)=>{
    res.json(chapters);
})


app.listen(5000, ()=>console.log('server is running'));