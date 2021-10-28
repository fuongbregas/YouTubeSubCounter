# YouTubeSubCounter
Get YouTube subscriber number without using their API with Python and Javascript
- If we try web scrapping a YouTube channel with JSoup in Java, or BeautifulSoup4 in Python, or Cheerio in Javascript, we will get a weird HTML form without any regular HTML tag or IDs.
- We can still print the form as a long string, so we can use regex to strip the subscriber number.
- The best is grabbing the About URL of the target channel to avoid other subscriber numbers of  featured or subscribed channels.