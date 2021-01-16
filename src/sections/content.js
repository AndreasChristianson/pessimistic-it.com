import bolts from "../images/bucket-of-bolts.png";
import drinks from "../images/team-time.png";
import stump from "../images/stump.png";
import collaboration from "../images/collaboration.png";
import elegance from "../images/elegance.png";
import snake from "../images/snake.png";
import {
  boltLight,
  boltDark,
  collaborationDark,
  collaborationLight,
  drinksDark,
  drinksLight,
  eleganceDark,
  eleganceLight,
  snakeDark,
  snakeLight,
  stumpDark,
  stumpLight,
} from "../constants/colors";

export const practices = [
  {
    title: "Quality",
    image: bolts,
    bullets: [
      {
        text: "Pair on everything",
      },
      {
        text: "Practice BDD & TDD",
      },
    ],
    darkColor: boltDark,
    lightColor: boltLight,
  },
  {
    title: "Topography",
    image: stump,
    bullets: [
      {
        markdown: "Be mindful of [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)",
      },
      {
        markdown: "Build teams around *products*, not *features*",
      },
      {
        markdown: "Engender [psychological safety](https://rework.withgoogle.com/print/guides/5721312655835136/)",
      },
    ],
    darkColor: stumpDark,
    lightColor: stumpLight,
  },
  {
    title: "Elegance",
    image: elegance,
    bullets: [
      {
        markdown: "Make tech debt visible",
      },
      {
        markdown: "Prefer composition",
      }
    ],
    darkColor: eleganceDark,
    lightColor: eleganceLight,
  },
  {
    title: "Culture",
    image: collaboration,
    bullets: [],
    darkColor:  collaborationDark,
    lightColor: collaborationLight ,
  },
  {
    title: "#5",
    image: drinks,
    bullets: [],
    darkColor: drinksDark,
    lightColor: drinksLight,
  },
  {
    title: "#6",
    image: snake,
    bullets: [],
    darkColor: snakeDark,
    lightColor: snakeLight,
  },
];

export const footerLinks = [
  {
    text: "Contact",
    url: 'mailto:achristianson@example.com?body=In order to prove that you are a human, please change the email address to use the hostname "pessimistic-it.com".'
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/andreas-christianson-43803844/",
  },
  {
    text: "Edit this page",
    url: "https://github.com/AndreasChristianson/pessimistic-it.com",
  },
];