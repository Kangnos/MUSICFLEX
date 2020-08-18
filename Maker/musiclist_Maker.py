import re
HiphopList = open("Musics/HiphopList", "w", encoding='UTF-8')
Hiphop_PlatformList_a = open("Maker/Hiphop", "r", encoding='UTF-8')
Hiphop_PlatformList = Hiphop_PlatformList_a.read();
Hiphop_PlatformList = Hiphop_PlatformList.strip()
Hiphop_PlatformList = re.split(":|\n|:\n", Hiphop_PlatformList)

PopList = open("Musics/PopList", "w", encoding='UTF-8')
Pop_PlatformList_a = open("Maker/Pop", "r", encoding='UTF-8')
Pop_PlatformList = Pop_PlatformList_a.read();
Pop_PlatformList = Pop_PlatformList.strip()
Pop_PlatformList = re.split(":|\n|:\n", Pop_PlatformList)

Musicdata = ["", ""]

artistnum = 0
vidnum = 1
musicnum = 2

janre = [Hiphop_PlatformList, Pop_PlatformList]

for i in range(len(janre[0])//3): # This part is the problem that I have to fix today or tomorrow. I can nailed it!
    if i == 0: 
        Musicdata[0] += ("{\n" + "    artist: " + '"' + janre[0][artistnum] + '",\n' + "    musictitle: " + '"' + janre[0][vidnum] + '",\n' + "    vid: " + '"' + janre[0][musicnum] + '"' + "\n},")
    else:
        vidnum += 3
        artistnum += 3
        musicnum += 3
        Musicdata[0] += ("\n"+"{\n" + "    artist: " + '"' + janre[0][artistnum] + '",\n' + "    musictitle: " + '"' + janre[0][vidnum] + '",\n' + "    vid: " + '"' + janre[0][musicnum] + '"' + "\n},")
    HiphopList.write(Musicdata[0])

for i in range(len(janre[1])//3): # This part is the problem that I have to fix today or tomorrow. I can nailed it!
    if i == 0: 
        Musicdata[1] += ("{\n" + "    artist: " + '"' + janre[1][artistnum] + '",\n' + "    musictitle: " + '"' + janre[1][vidnum] + '",\n' + "    vid: " + '"' + janre[1][musicnum] + '"' + "\n},")
    else:
        vidnum += 3
        artistnum += 3
        musicnum += 3
        Musicdata[1] += ("\n"+"{\n" + "    artist: " + '"' + janre[1][artistnum] + '",\n' + "    musictitle: " + '"' + janre[1][vidnum] + '",\n' + "    vid: " + '"' + janre[1][musicnum] + '"' + "\n},")
    HiphopList.write(Musicdata[1])

print(Musicdata)