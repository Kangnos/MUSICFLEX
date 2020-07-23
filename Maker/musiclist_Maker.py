import re
MainList = open("Musics/HiphopList", "w")
PlatformList_a = open("Maker/Hiphop", "r")
PlatformList = PlatformList_a.read();
PlatformList = PlatformList.strip()
PlatformList = re.split(":|\n|:\n", PlatformList)

Musicdata = ""

for i in range(0, (len(PlatformList)// 3)):
    if i == 0:
        Musicdata += "\n"+"{\n" + "    vid: " + '"' + PlatformList[i+2] + '",\n' + "    artist: " + '"' + PlatformList[i] + '",\n' + "    musictitle: " + '"' + PlatformList[i+1] + '"' + "\n},"
    elif i != 0:
        Musicdata += "\n"+"{\n" + "    vid: " + '"' + PlatformList[i+4] + '",\n' + "    artist: " + '"' + PlatformList[i+3] + '",\n' + "    musictitle: " + '"' + PlatformList[i+2] + '"' + "\n},"
# MainList.write(Musicdata)
print(Musicdata)
print(PlatformList)
print(len(PlatformList))
print("\n"+"{\n" + "    vid: " + '"' + PlatformList[i+2] + '",\n' + "    artist: " + '"' + PlatformList[i] + '",\n' + "    musictitle: " + '"' + PlatformList[i+1] + '"' + "\n},")