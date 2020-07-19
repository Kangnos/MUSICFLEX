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

app.get('/Hiphop', function (req, res) {  
    fs.readdir('./Musics', function (err, filelist) {
        fs.readFile('Musics/HiphopList', 'utf8', function(err, Music_info_list){
            var musicpage = MusicFlexMusicPage.HTML(Music_info_list);
            res.send(musicpage)
        })
    })
})

app.get('/Pop', function (req, res) {   
    fs.readdir('./Musics', function (err, filelist) {
        fs.readFile('Musics/PopList', 'utf8', function(err, Music_info_list){
            var musicpage = MusicFlexMusicPage.HTML(Music_info_list);
            res.send(musicpage)
        })
    })
})




app.listen(3000, function () {
    console.log("Example app is running")
})