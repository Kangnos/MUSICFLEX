from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import requests
from bs4 import BeautifulSoup
import time

browser = webdriver.Chrome('.\chrome crowling test\chromedriver.exe')

delay=3
browser.implicitly_wait(delay)

start_url  = 'https://www.youtube.com'
browser.get(start_url)  
browser.maximize_window()

browser.find_elements_by_xpath('//*[@id="search-input"]')[0].click()
browser.find_elements_by_xpath('//*[@id="search-form"]/div/div/div/div[2]/input')[0].send_keys('Rap god audio')#검색창 영역에 원하는 youtuber입력
browser.find_elements_by_xpath('//*[@id="search-form"]/div/div/div/div[2]/input')[0].send_keys(Keys.RETURN)#엔터

browser.find_elements_by_xpath('//*[@class="channel-link yt-simple-endpoint style-scope ytd-channel-renderer"]')[0].click()

browser.find_element_by_xpath('//*[@class="scrollable style-scope paper-tabs"]/paper-tab[2]').click()

body = browser.find_element_by_tag_name('body')#스크롤하기 위해 소스 추출


html0 = browser.page_source
html = BeautifulSoup(html0,'html.parser')