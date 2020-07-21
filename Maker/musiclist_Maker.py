import re
MainList = open("Musics/HiphopList", "w")
PlatformList_a = open("Maker/Hiphop", "r")
PlatformList = PlatformList_a.read();
PlatformList = PlatformList.strip()
PlatformList = re.split(":|\n|:\n", PlatformList)

Musicdata = ""

for i in range(0, len(PlatformList)):
    Musicdata += "\n"+"{\n" + "    vid: " + '"' + PlatformList[i+1] + '",\n' + "    artist: " + '"' + PlatformList[i] + '",\n' + "    musictitle: " + '"' + PlatformList[i+1] + '"' + "\n},"
# MainList.write(Musicdata)
print(Musicdata)
print(PlatformList)
print(len(PlatformList))