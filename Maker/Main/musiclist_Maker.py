from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import requests
from bs4 import BeautifulSoup
import time
import urllib.request
from urllib import request,response
import re

browser = webdriver.Chrome('Chrome crowler\chromedriver.exe')

delay=2
browser.implicitly_wait(delay)

start_url  = 'https://music.youtube.com'
browser.get(start_url)  
browser.maximize_window()


browser.find_elements_by_xpath('/html/body/ytmusic-app/ytmusic-app-layout/ytmusic-nav-bar/div[2]/ytmusic-search-box/div/div[1]')[0].click()
browser.find_elements_by_id('input')[1].send_keys('Eminem Rap god') #검색창 영역에 원하는 youtuber입력
browser.find_elements_by_id('input')[1].send_keys(Keys.RETURN)#엔터

browser.find_element_by_xpath('/html/body/ytmusic-app/ytmusic-app-layout/div[3]/ytmusic-search-page/ytmusic-section-list-renderer/div[2]/ytmusic-shelf-renderer[2]/div[2]/ytmusic-responsive-list-item-renderer[1]/div[1]/ytmusic-item-thumbnail-overlay-renderer/div/ytmusic-play-button-renderer/div').click()


current_url = browser.current_url

videocode = re.split('=|&', current_url)
videocode = videocode[1]

# ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import re

HiphopList = open("Musics/HiphopList", "w", encoding='UTF-8')
Hiphop_PlatformList_a = open("Maker/Main/Hiphop", "r", encoding='UTF-8')
Hiphop_PlatformList = Hiphop_PlatformList_a.read();
Hiphop_PlatformList = Hiphop_PlatformList.strip()
Hiphop_PlatformList = re.split(":|\n|:\n", Hiphop_PlatformList)

PopList = open("Musics/PopList", "w", encoding='UTF-8')
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
    for i in range(len(janre[j])//3): 
                browser.find_elements_by_xpath('/html/body/ytmusic-app/ytmusic-app-layout/ytmusic-nav-bar/div[2]/ytmusic-search-box/div/div[1]')[0].click()
        browser.find_elements_by_id('input')[1].send_keys(janre[j][artistnum] + janre[j][musicnum] + " audio") #검색창 영역에 원하는 youtuber입력
        browser.find_elements_by_id('input')[1].send_keys(Keys.RETURN)#엔터

        browser.find_element_by_xpath('/html/body/ytmusic-app/ytmusic-app-layout/div[3]/ytmusic-search-page/ytmusic-section-list-renderer/div[2]/ytmusic-shelf-renderer[2]/div[2]/ytmusic-responsive-list-item-renderer[1]/div[1]/ytmusic-item-thumbnail-overlay-renderer/div/ytmusic-play-button-renderer/div').click()


        current_url = browser.current_url

        videocode = re.split('=|&', current_url)
        videocode = videocode[1]
        if i == 0: 
            Musicdata[j] += ("{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][musicnum] + '",\n' + "    vid: " + '"' + janre[j][vidnum] + '"' + "\n},")
        else:
            vidnum += 3
            artistnum += 3
            musicnum += 3
            Musicdata[j] += ("\n"+"{\n" + "    artist: " + '"' + janre[j][artistnum] + '",\n' + "    musictitle: " + '"' + janre[j][musicnum] + '",\n' + "    vid: " + '"' + janre[j][vidnum] + '"' + "\n},")
            if Musicdata[j].count(janre[j][musicnum]) > 1:
                overlap_songs += janre[j][musicnum]
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