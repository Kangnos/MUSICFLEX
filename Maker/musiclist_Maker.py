import re
MainList = open("Musics/HiphopList", "w")
PlatformList_a = open("Maker/Hiphop", "r")
PlatformList = PlatformList_a.read();
PlatformList = PlatformList.strip()
PlatformList = re.split(":|\n|:\n", PlatformList)

MusicsToAddList = []
for i in range(1, len(PlatformList)):
    data = "\n"+"{\n" + "    vid: " + '"' + PlatformList[i] + '"\n' + "    artist: " + '"' + PlatformList[i-2] + '"\n' + "    musictitle: " + '"' + PlatformList[i-1] + '"' + "\n},"

print(MusicsToAddList)
print(len(PlatformList))
print(data)