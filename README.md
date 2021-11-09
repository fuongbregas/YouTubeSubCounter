# YouTube Subcriber Counter
Get YouTube subscriber number without using their trashy API with Python and Javascript
- If we try web scrape library a YouTube channel with JSoup in Java, or BeautifulSoup4 in Python, or Cheerio in Javascript, we will get a weird HTML form without any regular HTML tag or IDs.
- We can still print the form as a long string, so we can use regex to strip the subscriber number.
- The best is grabbing the About URL of the target channel to avoid other subscriber numbers of  featured or subscribed channels.
- For JS solution, you should host your own CORS anywhere website with Heroku because the one I added here will be expired. Solution: https://stackoverflow.com/questions/47076743/cors-anywhere-herokuapp-com-not-working-503-what-else-can-i-try
