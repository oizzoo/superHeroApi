import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

const accsToken = "064decba897b245d3f1cb3752f3cdad0"

let heroes = [];

const loadAllHeroes = async () => {
    try {
        const response = await axios.get(`https://akabab.github.io/superhero-api/api/all.json`);
        heroes = response.data
        console.log('Heroes loaded:', heroes.length);
    } catch (err) {
        console.error('Failed to load heroes list', err);
    }
};

app.get("/", (req, res) => {
    res.render("form.ejs");
});

app.post("/", async (req, res) => {
    const searchName = req.body.heroName.toLowerCase();
    const hero = heroes.find((hero) => hero.name.toLowerCase().includes(searchName))

    if (!hero) {
  return res.render("index.ejs", { error: "Hero not found", name: null, heroImg: null, powerstats: null });
}

try {
  const fetchHero = await axios.get(`https://akabab.github.io/superhero-api/api/id/${hero.id}.json`);
  const fullHero = fetchHero.data;
  res.render("index.ejs", {
    error: null,
    name: fullHero.name,
    heroImg: fullHero.images.sm,
    powerstats: fullHero.powerstats
  });
} catch (error) {
  res.render("index.ejs", { error: error.message, name: null, heroImg: null, powerstats: null });
}

});

const startServer = async () => {
  await loadAllHeroes();
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
};

startServer();