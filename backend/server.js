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



app.get('/data/search', (req, res)=>{
    const searchedPhrase = req.query.phrase;
    var similar = [];
    chapters.forEach(chapter=>{
        chapter.forEach(el=>{
            // (el.pl?.includes(searchedPhrase) || el.en?.includes(searchedPhrase)) && (similar.push(el));

            (el.pl?.includes(searchedPhrase) || el.en?.includes(searchedPhrase)) && (similar.push({
                pl: el.pl?.split(searchedPhrase),
                en: el.en?.split(searchedPhrase)
            }));
        })
    })
    similar = similar.slice(0, 20);
    (searchedPhrase=='') && (similar = []);
    res.json(similar);
})


app.listen(5000, ()=>console.log('server is running'));