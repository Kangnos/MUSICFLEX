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

Musicdata = ""
vidnum = 1
artistnum = 0
musicnum = 2

janre = [Hiphop_PlatformList, Pop_PlatformList]

for j in range(0,len(janre)):
    for i in range(0, (len(janre[j])// 3)):
        if i == 0:  
            Musicdata += "{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},"
        else:
            vidnum += 3
            artistnum += 3
            musicnum += 3
            Musicdata += "\n"+"{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][vidnum] + '",\n' + "    vid: " + '"' + janre[j][musicnum] + '"' + "\n},"

    if j == 0:
        HiphopList.write(Musicdata)
    if j == 1:
        PopList.write(Musicdata)
    print(Musicdata)
    print(Hiphop_PlatformList)
    print(Pop_PlatformList)