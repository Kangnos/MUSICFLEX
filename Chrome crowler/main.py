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
