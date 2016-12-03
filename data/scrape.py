import json, requests, re;
from html.parser import HTMLParser
board = "s4s";

class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.strict = False
        self.convert_charrefs= True
        self.fed = []
    def handle_data(self, d):
        self.fed.append(d)
    def get_data(self):
        return ''.join(self.fed)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

posts = list();

for pagenumber in range(1,10):
    r = requests.get('http://a.4cdn.org/s4s/'+str(pagenumber)+'.json')
    data = json.loads(r.text);
    for thread in data["threads"]:
        threadnumber = thread["posts"][0]["no"];
        r = requests.get('http://a.4cdn.org/s4s/thread/'+str(threadnumber)+'.json')
        thread = json.loads(r.text);
        for post in thread["posts"]:
            try:
                content = re.sub("<.*?>.*</.*?>", "", post["com"]);
                content = re.sub("<.*?>", "", content);
                print(content);
                posts.append(content);
            except KeyError:
                print("image only post, skipping");

with open('s4s.json', 'w', encoding="utf-8") as fp:
    json.dump(posts, fp)