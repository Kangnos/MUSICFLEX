function BackMusic() {
    currentVideo = onPlayVideo.value
    player.loadVideoById(currentVideo -= 1)
}

function NextMusic() {
    player.loadVideoById(currentVideo += 1)
}

for (let i = 0; i < listvideos.length; i++) {
    
}