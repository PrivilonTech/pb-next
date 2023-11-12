import { yearArray } from "@/utils/dateArray";
import { crudeList } from "./crudeList";
import futureTrendList from "./futureTrendList";
import globalBazaarList from "./globalBazaarList";
import { graphList } from "./graphList";
import indianBazaarList from "./indianBazaarList";

const yearList = yearArray(2015);

const list = [
  {
    id: 1,
    icon: "/Pane/home.svg",
    txt: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: "/Pane/news.svg",
    txt: "Buy & Sell",
    link: "/buy-sell",
  },
  {
    id: 3,
    icon: "/Pane/crude.svg",
    txt: "Crude & Feedstock",
    navItems: crudeList,
    link: "/crude",
  },
  {
    id: 4,
    icon: "/Pane/global.svg",
    txt: "Global Bazaar",
    navItems: globalBazaarList,
    link: "/global-bazaar",
  },
  {
    id: 5,
    icon: "/Pane/indian.svg",
    txt: "Indian Bazaar",
    navItems: indianBazaarList,
    link: "/indian-bazaar",
  },
  {
    id: 6,
    icon: "/Pane/graph.svg",
    txt: "Historical Data",
    navItems: graphList,
    link: "/historical-data",
  },
  {
    id: 7,
    icon: "/Pane/future.svg",
    txt: "Future Trend",
    navItems: futureTrendList,
    link: "/future-trend",
  },
  {
    id: 8,
    icon: "/Pane/plant-news.png",
    txt: "Plant News",
    link: "/plant-news",
  },
  {
    id: 9,
    icon: "/Pane/vip-delegation.png",
    txt: "VIP Delegations",
    navItems: yearList.map((year) => {
      return {
        id: year,
        section: year,
        subItems: [
          {
            id: 1,
            section: "Japan",
            href: `/vip-delegations/${year}/japan`,
          },
          {
            id: 2,
            section: "China",
            href: `/vip-delegations/${year}/china`,
          },
        ],
      };
    }),
  },
  {
    id: 10,
    icon: "/Pane/services.svg",
    txt: "Services",
    link: "/services",
    navItems: [
      {
        id: 1,
        section: "Events",
        slug: "events",
      },
      {
        id: 2,
        section: "Press Release",
        slug: "press-release",
      },
      {
        id: 3,
        section: "Whatsapp Chatbot",
        slug: "whatsapp-chatbot",
      },
    ],
  },
];

export default list;
