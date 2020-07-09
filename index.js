//Setting Up Express
const express = require("express");
const path = require("path");
const server = express();

//Middleware
server.use(express.static(path.join(__dirname, "public")));

//Request Handling
// const homePage =(req, res)=>{
//     const homePagePath = path.join(__dirname, 'public', 'index.html')
//     res.sendFile(homePagePath)
// }

// const aboutPage =(req, res)=>{
//     const aboutPagePath = path.join(__dirname, 'public', 'about.html')
//     res.sendFile(aboutPagePath)
// }
// const portfolioPage =(req, res)=>{
//     const portfolioPagePath = path.join(__dirname, 'public', 'portfolio.html')
//     res.sendFile(portfolioPagePath)
// }
// const careerPage =(req, res)=>{
//     const careerPagePath = path.join(__dirname, 'public', 'career.html')
//     res.sendFile(careerPagePath)
// }
// const contactPage =(req, res)=>{
//     const contactPagePath = path.join(__dirname, 'public', 'contact.html')
//     res.sendFile(contactPagePath)
// }

//Routes
// server.get('/', homePage)
// server.get('/about', aboutPage)
// server.get('/portfolio', portfolioPage)
// server.get('/career', careerPage)
// server.get('/contact', contactPage)

//Listening To Server
server.listen(3001, () => console.log("Server Is Ready For Any Request"));
