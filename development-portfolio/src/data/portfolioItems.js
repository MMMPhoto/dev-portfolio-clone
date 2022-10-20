import adoptMeScreenshot from "../images/Adopt-Me-Screenshot.png";
import socialApi from "../images/Social-Media-API-Screenshot.png";
// import portfolioScreenshot from "../images/Portfolio-Screenshot.png";
import viewFromHereScreenshot from "../images/View-From-Here-screenshot.png"

const portfolioItems = [
    {
        id: 1,
        name: "Weather App",
        description: "Web APIs, Javascript, CSS, HTML",
        deploymentUrl: "https://mmmphoto.github.io/Weather-App/",
        githubRepo: "https://github.com/MMMPhoto/Weather-App",
        imgSrc: "https://raw.githubusercontent.com/MMMPhoto/Weather-App/main/assets/images/weather-dashboard-screenshot.png"
    },
    {
        id: 2,
        name: "Tech Blog",
        description: "MVC, Node, Express, Sequelize, SQL",
        deploymentUrl: "https://max-tech-blog.herokuapp.com/",
        githubRepo: "https://github.com/MMMPhoto/Tech-Blog",
        imgSrc: "https://raw.githubusercontent.com/MMMPhoto/Tech-Blog/main/assets/images/tech-blog-screenshot-1.png"
    },
    {
        id: 3,
        name: "Adopt Me",
        description: "MVC, Node, Express, Sequelize, SQL",
        deploymentUrl: "https://adoptme5.herokuapp.com/",
        githubRepo: "https://github.com/JasmineDaniels/AdoptMe",
        imgSrc: `${adoptMeScreenshot}`
    },
    {
        id: 4,
        name: "Event Finder",
        description: "Web APIs, Javascript, CSS, HTML",
        deploymentUrl: "https://mmmphoto.github.io/Event-Finder/",
        githubRepo: "https://github.com/MMMPhoto/Event-Finder",
        imgSrc: "https://user-images.githubusercontent.com/70594281/174419344-26644f83-8f0c-4395-9b49-65ef8950d945.png"
    },
    {
        id: 5,
        name: "Social Media API",
        description: "Node, Express, Mongoose, Mongo (server-side only)",
        deploymentUrl: "https://github.com/MMMPhoto/Social-Network-API",
        githubRepo: "https://github.com/MMMPhoto/Social-Network-API",
        imgSrc: `${socialApi}`
    },
    {
        id: 6,
        name: "View From Here",
        description: "MERN Full Stack (React, Mongo, NodeJS, Express), Google Maps API",
        deploymentUrl: "https://viewfromhere.herokuapp.com/",
        githubRepo: "https://github.com/MMMPhoto/View-From-Here",
        imgSrc: `${viewFromHereScreenshot}`
    },
];

export default portfolioItems;