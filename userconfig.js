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
              icon_color: palette.red,
            },
            {
              name: "mynoise",
              url: "https://mynoise.net/NoiseMachines/stormSoundGenerator.php",
              icon: "headphones",
              icon_color: palette.green,
            },
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.blue,
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
              icon_color: palette.sky,
            },
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "Admin",
          links: [
            {
              name: "teams",
              url: "https://teams.microsoft.com/v2/",
              icon: "brand-teams",
              icon_color: palette.lavender,
            },
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "mail",
              icon_color: palette.sky,
            },
            {
              name: "calendar",
              url: "https://outlook.office.com/calendar/view/month",
              icon: "calendar",
              icon_color: palette.blue,
            },
            {
              name: "onedrive",
              url: "https://clickdimensions-my.sharepoint.com/",
              icon: "brand-onedrive",
              icon_color: palette.Mauve,
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
              icon_color: palette.lavender,
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
          name: "Environments",
          links: [
            {
              name: "Dev",
              url: "https://cdv9dev.crm.dynamics.com/main.aspx?appid=677923b5-8748-4ff0-b744-3d5d77da0ce8&forceUCI=1&pagetype=entitylist&etn=campaign&viewid=7f68a34b-26f1-430f-b3ef-7079f2925c69&viewType=1039",
              icon: "cloud-code",
              icon_color: palette.lavender,
            },
            {
              name: "QA",
              url: "https://cdv9qa.crm.dynamics.com/main.aspx?forceUCI=1&appid=d9c2e2ef-95bb-ea11-a812-000d3a988097",
              icon: "microscope",
              icon_color: palette.green,
            },
            {
              name: "Directory",
              url: "https://clickdimensions.atlassian.net/wiki/spaces/CTO/pages/2593587205/Dynamics+CDSE+and+Power+Bundle+-+Environments",
              icon: "folder-search",
              icon_color: palette.red,
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
              icon_color: palette.maroon,
            },
            {
              name: "Kibana",
              url: "https://devkibana.clickdimensions.com/app/discover#/?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(columns:!(),filters:!(),index:f47971c0-05b2-11ec-9a43-e7a879745c57,interval:auto,query:(language:kuery,query:''),sort:!(!('@timestamp',desc)))",
              icon: "brand-elastic",
              icon_color: palette.yellow,
            },
            {
              name: "STP",
              url: "https://stp.clickdimensions.com",
              icon: "pointer",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
    {
      name: "Help",
      background_url: "src/img/banners/cbg-09.gif",
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
          name: "Settings",
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
              icon_color: palette.blue,
            },
          ],
        },
          {
          name: "Edit Page",
          links: [
            {
              name: "Edit Page",
              url: "https://github.com/hextal/work-startpage/blob/main/userconfig.js",
              icon: "pen",
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
