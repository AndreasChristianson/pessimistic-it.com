import bolts from '../images/bucket-of-bolts.png'
import drinks from '../images/team-time.png'
import stump from '../images/stump.png'
import collaboration from '../images/collaboration.png'
import elegance from '../images/elegance.png'
import snake from '../images/snake.png'
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
} from '../constants/colors'

export const practices = [
    {
        title: 'Elegance & Craftsmanship',
        image: elegance,
        darkColor: eleganceDark,
        lightColor: eleganceLight,
        bullets: [
            {
                markdown:
                    '[Extract till you drop](https://sites.google.com/site/unclebobconsultingllc/one-thing-extract-till-you-drop)',
            },
            {
                markdown:
                    '[Prefer composition](https://en.wikipedia.org/wiki/Composition_over_inheritance)',
            },
            {
                markdown:
                    'Focus on [naming](https://martinfowler.com/bliki/TwoHardThings.html)',
            },
            {
                markdown:
                    'Follow [the boy scout rule](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)',
            },
        ],
    },
    {
        title: 'Topography',
        image: stump,
        bullets: [
            {
                markdown:
                    'Keep [teams small](https://www.sciencedirect.com/science/article/abs/pii/S0749597812000374)',
            },
            {
                markdown:
                    "Be mindful of [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law)",
            },
            {
                markdown:
                    'Build teams around [*products*, not *features*](https://martinfowler.com/articles/products-over-projects.html)',
            },
        ],
        darkColor: stumpDark,
        lightColor: stumpLight,
    },
    {
        title: 'Quality',
        image: bolts,
        darkColor: boltDark,
        lightColor: boltLight,
        bullets: [
            {
                markdown:
                    '[Keep development and production as similar as possible](https://12factor.net/dev-prod-parity)',
            },
            {
                markdown:
                    '[Favor immutability](https://alvinalexander.com/scala/scala-idiom-immutable-code-functional-programming-immutability/)',
            },
            {
                markdown: 'Practice BDD & TDD',
            },
            {
                markdown:
                    '[Everything in one codebase](https://12factor.net/codebase)',
            },
        ],
    },
    {
        title: 'Collaboration',
        image: collaboration,
        bullets: [
            {
                markdown:
                    'Prefer [face-to-face conversations](https://agilemanifesto.org/principles.html)',
            },
            {
                markdown:
                    '[Pair](https://martinfowler.com/articles/on-pair-programming.html) on everything',
            },
            {
                markdown: 'todo',
            },
        ],
        darkColor: collaborationDark,
        lightColor: collaborationLight,
    },
    {
        title: 'Culture',
        image: drinks,
        bullets: [
            {
                markdown:
                    'Engender [psychological safety](https://rework.withgoogle.com/print/guides/5721312655835136/)',
            },

            {
                markdown: 'Focus begets flow, flow begets joy',
            },
            {
                markdown:
                    '[Elevate improvement of daily work over daily work itself](https://itrevolution.com/the-unicorn-project/)',
            },
            {
                markdown:
                    '[Embrace change](https://www.amazon.com/gp/product/0321278658)',
            },
        ],
        darkColor: drinksDark,
        lightColor: drinksLight,
    },
    {
        title: 'todo',
        image: snake,
        bullets: [],
        darkColor: snakeDark,
        lightColor: snakeLight,
    },
]

export const footerLinks = [
    {
        text: 'Contact',
        url:
            'mailto:achristianson@example.com?body=In order to prove that you are a human, please change the email address to use the hostname "pessimistic-it.com".',
    },
    {
        text: 'Edit this page',
        url: 'https://github.com/AndreasChristianson/pessimistic-it.com',
    },
]
