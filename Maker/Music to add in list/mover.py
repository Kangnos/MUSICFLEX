import re
HiphopList = open("Maker/Music to add in list/HiphopList-crowling", "w", encoding='UTF-8')
Hiphop_PlatformList_a = open("Maker/Main/Hiphop", "r", encoding='UTF-8')
Hiphop_PlatformList = Hiphop_PlatformList_a.read();
Hiphop_PlatformList = Hiphop_PlatformList.strip()
Hiphop_PlatformList = re.split(":|\n|:\n", Hiphop_PlatformList)

PopList = open("Maker/Music to add in list/PopList-crowling", "w", encoding='UTF-8')
Pop_PlatformList_a = open("Maker/Main/Pop", "r", encoding='UTF-8')
Pop_PlatformList = Pop_PlatformList_a.read();
Pop_PlatformList = Pop_PlatformList.strip()
Pop_PlatformList = re.split(":|\n|:\n", Pop_PlatformList)

Musicdata = ["", ""]

artistnum = 0
musicnum = 1
vidnum = 2

janre = [Hiphop_PlatformList, Pop_PlatformList]

overlap_songs = ""


for j in range(0,(len(janre))):
    for i in range(len(janre[j])//3): # This part is the problem that I have to fix today or tomorrow. I can nailed it!
        Musicdata[j] += (janre[j][artistnum]+ " - " + janre[j][musicnum] + "\n")
        musicnum += 3
        artistnum += 3
    artistnum = 0
    musicnum = 1
    vidnum = 2
    if j == 0:
        HiphopList.write(Musicdata[0])
    if j == 1:
        PopList.write(Musicdata[1])
# print(Musicdata)
# overlap_songs += Musicdata.count(janre[0].musicnum)
print("중복되는 노래: ", overlap_songs)