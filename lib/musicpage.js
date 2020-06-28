module.exports = {
    HTML: function (musics, Music_info_list) {
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
                        <a href="/" >MusicFlex</a>
                        <div class="toggle-container">
                            <div id="toggle-button" onclick="this.classList.toggle('active'), changebgcolorblack()">                                
                                <div class="inner-circle" onclick="changebgcolorwhite()"></div>
                            </div>
                        </div>
                    </div>

                    <div id="Music-player">
                        <div id="Main-panel">
                            <div class="no_video">
                                <div id="player"></div>
                            </div>
                            <div id="Music_name"></div>
                            <div id="lyrics-zone">

                            </div>
                        </div>
                        <div id="Side-panel">
                            <div style="position: relative;">
                                <form>
                                    <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track" id="value" onkeyup="filter()">
                                </form>
                            </div>
                            <div id="playlist">
                                ${musics}
                            </div>
                        </div> 
                        <div id="Type-panel">
                            <div id="Types">
                                <div class="Type"><a href="../Rap" id="type-a"><span>▶</span> Rap</a></div>
                                <div class="Type"><a href="../Pop" id="type-a"><span>▶</span> Pop</a></div>
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
                function onPlayvideo(video_num){
                    var video = listvideos[video_num];
                    player.loadVideoById(video)
                    console.log(video)
                    console.log(video_num)
                    MusicName.innerHTML = videos[video_num].artist + " - " + videos[video_num].musictitle;
                    Pagetitle.innerHTML = videos[video_num].musictitle;
                    video_code_number = video_num
                    console.log(video_code_number)
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
                function changebgcolorblack(){
                    document.body.style.backgroundColor = "black";
                    document.querySelector('body').style.color = "white";
                    document.querySelector('a').style.color = "white";
                    document.querySelector('div').style.color = "white";
                }
                function changebgcolorwhite(){
                    document.body.style.backgroundColor = "white";
                    document.querySelector('body').style.color = "black";
                    document.querySelector('a').style.color = "black";
                    document.querySelector('div').style.color = "black";
                }
            </script>

        `
    }
}