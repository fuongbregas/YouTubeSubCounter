import requests
from bs4 import BeautifulSoup
import re

# Retrieve the web page
url = 'https://www.youtube.com/c/PokerFaceYoutube/about'

# Parse the HTML
req = requests.get(url)
soup = BeautifulSoup(req.text, 'html.parser')
textSoup = str(soup)

regex = '(?<="subscriberCountText":{"accessibility":{"accessibilityData":{"label":").+?(?="}},"simpleText":")'
m = re.search(regex, textSoup)
print(m[0])
