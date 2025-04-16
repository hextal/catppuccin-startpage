// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Amsterdam",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    { 
      name: "myself",
      background_url: "src/img/banners/cbg-11.gif",
      categories: [
        {
          name: "Productivity",
          links: [
            {
              name: "pomodro",
              url: "https://pomofocus.io/",
              icon: "clock-hour-1",
              icon_color: palette.peach,
            },
            {
              name: "mynoise",
              url: "https://mynoise.net/NoiseMachines/stormSoundGenerator.php",
              icon: "headphones",
              icon_color: palette.peach,
            },
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Day-to-day",
          links: [
            {
              name: "Sprint",
              url: "https://clickdimensions.atlassian.net/jira/software/c/projects/CG/boards/169?assignee=606d8a012b469c0070424992",
              icon: "run",
              icon_color: palette.green,
            },
            {
              name: "Documentation",
              url: "https://clickdimensions.atlassian.net/wiki/home",
              icon: "book",
              icon_color: palette.white,
            },
          ],
        },
        {
          name: "Help",
          links: [
            {
              name: "devops",
              url: "https://clickdimensions.atlassian.net/servicedesk/customer/portal/9",
              icon: "settings",
              icon_color: palette.green,
            },
            {
              name: "bizops",
              url: "https://clickdimensions.atlassian.net/servicedesk/customer/portal/9",
              icon: "user-question",
              icon_color: palette.peach,
            },
            {
              name: "misc",
              url: "https://clickdimensions.atlassian.net/servicedesk/customer/portal/9",
              icon: "disc",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "Azure",
          links: [
            {
              name: "Repos",
              url: "https://dev.azure.com/ClickDimensionstfs/",
              icon: "brand-github",
              icon_color: palette.purple,
            },
            {
              name: "Pipelines",
              url: "https://dev.azure.com/ClickDimensionstfs/CRM/_build",
              icon: "arrows-exchange",
              icon_color: palette.green,
            },
              {
              name: "Releases",
              url: "https://dev.azure.com/ClickDimensionstfs/CRM/_release?_a=releases&view=mine&definitionId=223",
              icon: "rocket",
              icon_color: palette.red,
            },
            {
              name: "Portal",
              url: "https://portal.azure.com",
              icon: "brand-azure",
              icon_color: palette.blue,
            },

          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "Consul",
              url: "http://consul.dev.clickdimensions.com:8500/ui/#/dc1/services",
              icon: "circle-letter-c",
              icon_color: palette.green,
            },
            {
              name: "Kibana",
              url: "https://devkibana.clickdimensions.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:f47971c0-05b2-11ec-9a43-e7a879745c57,interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))",
              icon: "brand-elastic",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chill",
      background_url: "src/img/banners/cbg-08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "learning",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },

            {
              name: "playstation",
              url: "https://www.playstation.com",
              icon: "device-playstation",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },

          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
