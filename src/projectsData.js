import tasksTracker from "./img/tasksTracker.PNG";
import soulMatch from "./img/soulMatch.PNG";
import netflixAndGrill from "./img/netflixAndGrill.PNG";
import bookSearch from "./img/book-search-engine.JPG";
import techBlog from "./img/techBlog.PNG";
import yourLocalFarmer from "./img/your-local-farmer.JPG";

export const projects = [
  {
    title: "Tasks Tracker",
    technologies: "React",
    description:
      "Tasks Tracker web application using React to help keep track of daily tracks.",
    img: tasksTracker,
    code: "https://github.com/Linhbui88/react-tasks-tracker",
    deployedLink: "https://linhs-task-tracker.herokuapp.com/",
  },
  {
    title: "soulMatch",
    technologies: "Node/Express.js, MySQL + Sequelize, Express-Handlebars",
    description:
      "A dating web application utilizing MySQL + Sequelize in the back end when using Handlebars Templates to render HTML on the client side.",
    img: soulMatch,
    code: "https://github.com/Linhbui88/soulMatch",
    deployedLink: "https://linh-soul-match.herokuapp.com/",
  },
  {
    title: "Netflix and Grill",
    technologies: "HTML, CSS, JavaSrcipt",
    description:
      "An app to help pair an accommodating dish for dinner with a movie based on a few answers.",
    img: netflixAndGrill,
    code: "https://github.com/Linhbui88/Netflix-and-Grill",
    deployedLink: "https://linhbui88.github.io/Netflix-and-Grill/",
  },
  {
    title: "Book Search Engine",
    technologies:
      "JavaScript, Node, Express, Mongoose, MongoDB, GraphQL, React",
    description:
      "Full Stack MERN Application, using React to query and display books based on user searches, and allow the user to store them.",
    img: bookSearch,
    code: "https://github.com/Linhbui88/Book-Search-Engine",
    deployedLink: "https://linh-book-search-engine.herokuapp.com/",
  },
  {
    title: "Tech Blog",
    technologies: "Node/Express.js, MySQL + Sequelize, Handlebars",
    description:
      "A Tech Blog with CRUD method using MySQl + Sequelize to store data, Handlebras to render HTML.",
    img: techBlog,
    code: "https://github.com/Linhbui88/Tech-Blog",
    deployedLink: "https://nameless-harbor-72570.herokuapp.com/",
  },
  {
    title: "Your Local Farmer",
    technologies: "React, Chakra UI, GraphQL, MongoDB + Mongoose",
    description:
      "Full Stack MERN Application ,the purposes of this app are to help buying fresh from the farm, avoid food waste and support local business.",
    img: yourLocalFarmer,
    code: "https://github.com/Linhbui88/your-local-farmers",
    deployedLink: "https://your-local-farmers.herokuapp.com/",
  },
];
