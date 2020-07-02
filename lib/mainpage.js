module.exports = {
    HTML:function(){
        return `
            <!DOCTYPE html>
                <html lang="en" dir="ltr">
                <head>
                    <meta charset="utf-8">
                    <title>MusicFlex</title>
                
                </head>
                <body>
                    <div class="maincontainer">
                        <div class = "Logo">
                            <a href="/">MusicFlex</a>
                        </div>
                        <link rel="shortcut icon" href="#">
                        <div id="Music-player">
                            <div id="Main-panel">
                                <div class="no_video">
                                    No Video
                                </div>
                            </div>
                            <div id="Side-panel">
                                <div style="position: relative;">  
                                    <input style="color: black; font-size: 20px; text-align: center;" type="text" placeholder="Search for track">
                                </div>
                                <div id="playlist">
                                    None
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
                <link rel="stylesheet" href="/mainpage.css">
            </html>

        `
    }
}