<img src="http://i.imgur.com/UIYlRpf.gif?1" style="border-radius:4px; border:1px;">

I've seen a few mobile hackathon apps (MHacks & PennApps), but I wonder if a native app is really necessary. Why not just focus on a great mobile web experience with critical info like: 

1. FAQ + general info (code of conduct / emergency plan)
2. Schedule, alerts (where the food at?)
3. How to submit your hack (when's the deadline again?
4. Sponsors info (location, prizes, who's recruiting?)
5. Where to find mentors (I need help with Ruby & Parse!)

You can post all this info on Devpost, but the mobile view isn't a great experience. It presents _everything_ instead of focusing on a few key things. 

So, I decided to change that &mdash; sorta. I came up with a reference design for a mobile hackathon site. It contains the info mentioned above, integrates Roost for webpush (although, I've been struggling with it), and has a Chrome manifest / web worker so you can prompt users to install it to their Android home screen. 

### What's next?

It's a static site, so I'm thinking about building a spreadsheet / JSON based generator for it (like a Jekyll site). Quickest way to deploy changes, _amirite_? Or you could link it up to something like Jessica Lord's sheetsee.js and dynamically populate it w/ template tags. BTW, pull requests are quite welcome.

I'd also like to integrate this with existing hackathon check in processes. Maybe you go here to sign your waiver & release & get your swag? I dunno, you tell me, I need your feedback! 
