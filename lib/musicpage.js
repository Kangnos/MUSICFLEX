module.exports = {
    HTML: function (musics) {
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
                        </div>
                        <div id="Music-player">
                            <div id="Main-panel">
                                <div class="no_video">
                                    <div id="player"></div>
                                    <div id="Music_name"></div>
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">
                                    <form>
                                        <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track" id="value" onkeyup="filter()">
                                    </form>
                                </div>
                                <div id="playlist">
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(0)"><span>🎧 </span> NF - Time</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(1)"><span>🎧 </span> Lil Tecca - Ransom</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(2)"><span>🎧 </span> Eminem - Darkness</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(3)"><span>🎧 </span> Eminem - Godzilla</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(4)"><span>🎧 </span> Eminem - RapGod</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(5)"><span>🎧 </span> Joyner Lucas - ISIS</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(6)"><span>🎧 </span> Eminem - Venom</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(7)"><span>🎧 </span> Dr.Dre - Still D.R.E</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(8)"><span>🎧 </span> NF - PAID MY DUES</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(9)"><span>🎧 </span> NF - When I grow up</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(10)"><span>🎧 </span> Eminem - Without me</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(11)"><span>🎧 </span> Jack Harlow - What's popin'</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(12)"><span>🎧 </span> Ayo&Teo - Rolex</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(13)"><span>🎧 </span> NF - Lie</span></div>
                                    <div class="Music"><span style="cursor: pointer;" class="Music_name" onclick = "onPlayvideo(14)"><span>🎧 </span> Lil Nas X - Old Town Road</span></div>
                                </div>
                            </div> 
                            <div id="Type-panel">
                                <div id="Types">
                                    <div class="Type"><a href="../Rap" id=""><span>▶</span> Rap</a></div>
                                    <div class="Type"><a href="../Pop" id=""><span>▶</span> Pop</a></div>
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
                        {
                            vid: 'AkmJop2WUQA',
                            artist: "NF",
                            musictitle: "Time"
                        },
                        {
                            vid: 'XLofd-v_Bas',
                            artist: "Lil Tecca",
                            musictitle: "Ransom"
                        },
                        {
                            vid: 'skn7T_XPQnY',
                            artist: "Eminem",
                            musictitle: "Darkness"
                        },
                        {
                            vid: '9XvXF1LrWgA',
                            artist: "Eminem",
                            musictitle: "Godzilla"
                        },
                        {
                            vid: "S7cQ3b0iqLo",
                            artist: "Eminem",
                            musictitle: "RapGod"
                        },
                        {
                            vid: "duF_-8KfsiQ",
                            artist: "Joyner Lucas",
                            musictitle: "ISIS"
                        },
                        {
                            vid: "gRZ_HPYiTC0",
                            artist: "Eminem",
                            musictitle: "Venom"
                        },
                        {
                            vid: "0KKrXun2f0g",
                            artist: "Dr.Dre",
                            musictitle: "Still D.R.E"
                        },
                        {
                            vid: "a-bkgOfJAFI",
                            artist: "NF",
                            musictitle: "PAID MY DUES"
                        },
                        {
                            vid: "ZGXw-AiXJ8g",
                            artist: "NF",
                            musictitle: "When I grow up"
                        },
                        {
                            vid: "7UEvKWxqGGw",
                            artist: "Eminem",
                            musictitle: "Without me"
                        },
                        {
                            vid: "EzrM9RJnAhA",
                            artist: "Jack Harlow",
                            musictitle: "What's popin'"
                        },
                        {
                            vid: "rCx4NFNuYgI",
                            artist: "Ayo&Teo",
                            musictitle: "Rolex"
                        },
                        {
                            vid: "B1dmRjyN0CQ",
                            artist: "NF",
                            musictitle: "Lie"
                        },
                        {
                            vid: "9YpvNgCSaCU",
                            artist: "Lil Nas X",
                            musictitle: "Old Town Road"
                        }
                    ];
                    var index = 0;
                    var encoded_data = "";
                    for (let i = 0; i < videos.length; i++) {
                        encoded_data += videos[i].vid + ", ";
                        console.log(encoded_data);
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

        `
    }
}