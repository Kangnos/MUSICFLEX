
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var MusicName = document.getElementById("Music_name");
var Pagetitle = document.getElementById("Pagetitle");

var videos = [
    ${Music_info_list}
];
var index = 0;
var encoded_data = "";
for (let i = 0; i < videos.length; i++) {
    encoded_data += videos[i].vid + ", ";
}
var listvideos = encoded_data.split(', ');

function onYouTubeIframeAPIReady() {
    var n = 0;
    var vid = listvideos[n];
    console.log(listvideos)
    console.log(vid)
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: vid,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

var video_code_number = 0;
function onPlayvideo(index){
    var video = listvideos[index];
    player.loadVideoById(video)
    console.log(video)
    console.log(index)
    MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
    Pagetitle.innerHTML = videos[index].musictitle;
    video_code_number = index
    console.log(index)
}

function onPlayerReady(event) {
    MusicName.innerHTML = videos[index].artist + " - " + videos[index].musictitle;
    Pagetitle.innerHTML = videos[index].musictitle;
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        const musictitle = videos[video_code_number+1].musictitle;
        console.log(musictitle);
        MusicName.innerHTML = videos[video_code_number + 1].artist + " - " + videos[video_code_number + 1].musictitle;
        Pagetitle.innerHTML = videos[video_code_number + 1].musictitle;
        if (index < videos.length) {
            video_code_number += 1
            event.target.loadVideoById({
                videoId: videos[video_code_number].vid
            });
        }
    }
}

// creating musiclist
for (let i = 0; i < videos.length; i++) {
    var musiclistzone = document.getElementById("playlist")
    musiclist = document.createElement("div");
    musiclist.innerHTML = '<div class="Music">' + '<span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(' + i + ')">' + "<span>🎧 </span>" + videos[i].artist + " - " + videos[i].musictitle + "</span></div>"
    document.getElementById("playlist").appendChild(musiclist);  
}


var count = 0

// Buttons functions
function BackMusic() {
    console.log(index)
    count++
    player.loadVideoById(listvideos[index-1 ])
    MusicName.innerHTML = videos[index - 1 ].artist + " - " + videos[index - 1 ].musictitle;
    Pagetitle.innerHTML = videos[index - 1 ].musictitle;
}

function NextMusic() {
    console.log(index)
    player.loadVideoById(listvideos[index+1])
    MusicName.innerHTML = videos[index + 1].artist + " - " + videos[index + 1].musictitle;
    Pagetitle.innerHTML = videos[index + 1].musictitle;
}




function filter(){
    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("Music");

    for(i=0;i<item.length;i++){
        name = item[i].getElementsByClassName("Music_name");
        if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){ 
            item[i].style.display = "grid";
        }else{
            item[i].style.display = "none";
        }
    }
}



function bgcolorchange(){
    var Bodyelement = document.body;
    var toggle = document.getElementById("toggle-button");
    var logo = document.getElementById("logo");
    var toggle_condition = "unactive"
    
    if(toggle.className == "active"){
        Bodyelement.style.color = "#121111";
        Bodyelement.style.backgroundColor = "rgb(247, 247, 247)";
        logo.style.color = "#121111";
        toggle_condition = "active"
        console.log(toggle_condition)
    }
    else{
        Bodyelement.style.color = "#ebebeb";
        Bodyelement.style.backgroundColor = "#121111";
        logo.style.color = "#ebebeb";
        toggle_condition = "unactive"
        console.log(toggle_condition)
    }
}

