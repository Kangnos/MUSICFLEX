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
                            <div id="shuffle_toggle-button" onclick="this.classList.toggle('active'), music_shuffle()">                                
                                <div class="inner-circle" ></div>
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
            <script type="text/javascript">
                var videos = [
                    ${ Music_info_list }
                ];
            </script>
            <script src="/main_system.js"></script>
            <script src="/filter.js"></script>
            <script src="/bgcolorchange.js"></script>
        `
    }
}