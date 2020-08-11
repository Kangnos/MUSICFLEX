module.exports = {
    HTML: function (Music_info_list) {
        return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <title id="Pagetitle"></title>      
        </head>
        <link rel="shortcut icon" href="#">
        <body>
            <div class="maincontainer">
                <div class = "Logo">
                    <a href="/" id="logo" rel="no-refresh">MUSICFLEX</a>
                    <div class="toggle-container">
                        <div id="toggle-button" onclick="this.classList.toggle('active'), bgcolorchange()">                                
                            <div class="inner-circle" ></div>
                        </div>
                    </div>
                </div>

                <div id="Music-player">
                    <div id="Main-panel">
                        <div id="player"></div>
                        <div id="Music_name"></div>
                        <div id="PlayerButton">
                            <button id="BackMusic" onclick="BackMusic()">BACK</button>
                            <button id="NextMusic" onclick="NextMusic()">NEXT</button>
                        </div>
                        <div id="lyrics-zone">
                        </div>
                    </div>
                    <div id="Side-panel">
                        <div style="position: relative;">
                            <form>
                                <input style="color: black; font-weight: bold; font-size: 19px; text-align: center;" type="text" placeholder="Search for track" id="value" onkeyup="filter()">
                            </form>
                        </div>
                        <div id="playlist">
                            
                        </div>
                    </div> 
                    <div id="Type-panel">
                        <div id="Types">
                            <div class="Type"><a href="../Hiphop" class="type-a" rel="no-refresh"><span>▶</span> Hiphop</a></div>
                            <div class="Type"><a href="../Pop" class="type-a" rel="no-refresh"><span>▶</span> Pop</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        <link rel="stylesheet" href="/index.css">
        </html>

        <script>
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
            var index = 0

            // Buttons functions
            function BackMusic() {
                console.log("index: "+index)
                console.log("count: "+count)
                console.log(videos[index])
                if(index == 0){
                    index = 0
                    player.loadVideoById(listvideos[0])
                    MusicName.innerHTML = videos[0].artist + " - " + videos[0].musictitle;
                    Pagetitle.innerHTML = videos[0].musictitle;
                }
                else{
                    player.loadVideoById(listvideos[index - 1])
                    MusicName.innerHTML = videos[index - 1].artist + " - " + videos[index - 1].musictitle;
                    Pagetitle.innerHTML = videos[index - 1].musictitle;
                    index -= 1
                    count -= 1
                }
            }

            function NextMusic() {
                console.log(index)
                console.log(count)
                index++
                count++
                if(index === 0){
                    player.loadVideoById(listvideos[index+1])
                    MusicName.innerHTML = videos[index + 1].artist + " - " + videos[index + 1].musictitle;
                    Pagetitle.innerHTML = videos[index + 1].musictitle;
                }
                if(index == (listvideos.length)){
                    player.loadVideoById(listvideos[0])
                    MusicName.innerHTML = videos[0].artist + " - " + videos[0].musictitle;
                    Pagetitle.innerHTML = videos[0].musictitle;
                }
                else{
                    player.loadVideoById(listvideos[index+count])
                    MusicName.innerHTML = videos[index+count].artist + " - " + videos[index +count].musictitle;
                    Pagetitle.innerHTML = videos[index+count].musictitle;
                }
            }
            

        </script>
        
        <script>
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
        </script>

        <script>
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

        </script>
    `
    }
}