import { crudeList } from "./crudeList";
import futureTrendList from "./futureTrendList";
import globalBazaarList from "./globalBazaarList";
import { graphList } from "./graphList";
import indianBazaarList from "./indianBazaarList";

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
    txt: "News",
    link: "/news",
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
    txt: "Graph",
    navItems: graphList,
    link: "/graph",
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
    icon: "/Pane/services.svg",
    txt: "Services",
    link: "/services",
  },
  {
    id: 9,
    icon: "/Pane/events_1.png",
    txt: "Events",
    link: "/events",
  },
  {
    id: 10,
    icon: "/Pane/press-release_1.png",
    txt: "Press Release",
    link: "/press-release",
  },
];

export default list;
