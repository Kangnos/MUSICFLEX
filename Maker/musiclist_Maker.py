import re
MainList = open("Musics/HiphopList", "w")
PlatformList_a = open("Maker/Hiphop", "r")
PlatformList = PlatformList_a.read();
PlatformList = PlatformList.strip()
PlatformList = re.split(":|\n|:\n", PlatformList)

Musicdata = ""
vidnum = 1
artistnum = 0
musicnum = 2

for i in range(0, (len(PlatformList)// 3)):
    if i == 0:
        Musicdata += "{\n" + "    artist: " + '"' + PlatformList[artistnum] + '",\n' + "    musictitle: " + '"' + PlatformList[vidnum] + '",\n' + "    vid: " + '"' + PlatformList[musicnum] + '"' + "\n},"
    else:
        vidnum += 3
        artistnum += 3
        musicnum += 3
        Musicdata += "\n"+"{\n" + "    artist: " + '"' + PlatformList[artistnum] + '",\n' + "    musictitle: " + '"' + PlatformList[vidnum] + '",\n' + "    vid: " + '"' + PlatformList[musicnum] + '"' + "\n},"
MainList.write(Musicdata)
print(Musicdata)
print(PlatformList)