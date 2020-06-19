var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var MusicFlexMainPage = require('./lib/mainpage.js')
var MusicFlexMusicPage = require('./lib/musicpage.js')
var compression = require('compression');
var url = require('url');
app.use(express.static('public'));
app.use(compression())


app.get('/', function (req, res) {
    var mainpage = MusicFlexMainPage.HTML();
    res.send(mainpage)
});

app.get('/Rap', function (req, res) {   
    fs.readdir('./musics', function (err, filelist) {
        fs.readFile('musics/Rap/RapMusics', 'utf8', function (err, musics) {
            var musicpage = MusicFlexMusicPage.HTML(musics);
            res.send(musicpage)
        })
    })
})

app.get('/Pop', function (req, res) {   
    fs.readdir('./musics', function (err, filelist) {
        fs.readFile('musics/Pop/PopMusics', 'utf8', function (err, musics) {
            var musicpage = MusicFlexMusicPage.HTML(musics);
            res.send(musicpage)
        })
    })
})




app.listen(3000, function () {
    console.log("Example app is running")
})