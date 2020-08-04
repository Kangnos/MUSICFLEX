import re
HiphopList = open("Musics/HiphopList", "w")
Hiphop_PlatformList_a = open("Maker/Hiphop", "r")
Hiphop_PlatformList = Hiphop_PlatformList_a.read();
Hiphop_PlatformList = Hiphop_PlatformList.strip()
Hiphop_PlatformList = re.split(":|\n|:\n", Hiphop_PlatformList)

PopList = open("Musics/PopList", "w")
Pop_PlatformList_a = open("Maker/Pop", "r")
Pop_PlatformList = Pop_PlatformList_a.read();
Pop_PlatformList = Pop_PlatformList.strip()
Pop_PlatformList = re.split(":|\n|:\n", Pop_PlatformList)

Musicdata = ["", ""]

artistnum = 0
vidnum = 1
musicnum = 2

janre = [Hiphop_PlatformList, Pop_PlatformList]

for j in range(0,(len(janre))):
    for i in range(len(janre[j])//3): # This part is the problem that I have to fix today or tomorrow. I can nailed it!
        if i == 0: 
            Musicdata[j] += ("{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},")
        else:
            vidnum += 3
            artistnum += 3
            musicnum += 3
            Musicdata[j] += ("\n"+"{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},")

    if j == 0:
        HiphopList.write(Musicdata[0])
    if j == 1:
        PopList.write(Musicdata[1])
    print(Musicdata)
    print(Musicdata[0])