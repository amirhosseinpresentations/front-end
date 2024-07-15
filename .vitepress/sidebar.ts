import {DefaultTheme} from "vitepress";

const sidebar: DefaultTheme.Sidebar = [
    {
        "text": "Fundamentals",
        "link": "fundamentals",
        "items": [
            {
                "text": "Internet",
                "link": "fundamentals/internet"
            },
            {
                "text": "HTML",
                "link": "fundamentals/html"
            },
            {
                "text": "CSS",
                "link": "fundamentals/css"
            },
            // {
            //     "text": "Simple Tasks",
            //     "link": "tasks"
            // }
        ]
    },
    {
        "text": "Projects",
        "items": [
            {
                "text": "Fake Store",
                "link": "projects/fake-store"
            },
            {
                "text": "Yoga Positions",
                "link": "projects/yoga-positions"
            },
        ]
    }
]


export default sidebar;
