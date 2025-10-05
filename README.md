🦸 SuperHero API Project

This project is a Capstone Project from Angela Yu's Node.js and Express.js Bootcamp.
Its purpose is to demonstrate the integration of a public API into a dynamic web application built with Node.js, Express, Axios, and EJS.



📌 About the Project

The app allows users to search for superheroes by name, then fetches and displays their stats, name, and image using data from the SuperHero API.

It also features real-time search suggestions and error handling if a hero is not found.



🔧 Technologies Used





Node.js + Express.js – for the server



Axios – to fetch API data



EJS – as the templating engine



HTML5 + CSS3 – frontend design



SuperHero API – public API with hero data



📂 Project Structure

superHeroApi/
├── Public/
│   └── js/
│       └── searchForHero.js
├── views/
│   ├── form.ejs
│   └── index.ejs
├── style.css
├── index.js
├── package.json
└── README.md



💻 How to Run Locally



⚠️ This project is not hosted live (e.g. on GitHub Pages) because it runs on a Node.js server.

1. Clone the repository

git clone https://github.com/oizzoo/superHeroApi.git
cd superHeroApi

2. Install dependencies

npm install

3. Start the server

nodemon index.js

If you don't have nodemon, install it globally:

npm install -g nodemon

Or use:

node index.js

4. Open in your browser

Visit: http://localhost:3000



✅ Features





🔍 Search for any superhero by name



📊 View hero power stats like strength, speed, intelligence, etc.



📷 See hero images



✨ Real-time autocomplete while typing



❌ Error message when hero not found



🎨 Stylish, responsive UI with progress bars



⚠️ Error Handling





If a hero is not found, a message is shown to the user.



Errors from the API are logged in the console.



No crash on invalid input.



📘 What I Learned





How to fetch and filter API data with Axios



How to render data dynamically using EJS



How to handle routes and form submissions with Express



How to create a clean, user-friendly interface with HTML + CSS



How to structure a full-stack Node.js project



👤 Author

Built by @oizzoo

As part of the Angela Yu Node.js/Express Capstone Project



📎 License

This project is open-source and free to use for learning purposes.