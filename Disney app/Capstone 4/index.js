import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];



app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function findPokemon(name, date) {

    let ranNum = 0;
    let letnum = 0;
    let monthIndex = 0;
    let ran = Math.floor(Math.random()*10) + 1;
    name = name.substr(0, 1);
    letnum = letnum + letter.indexOf(name.toUpperCase()); // returns index of first initial 
    monthIndex = months.indexOf(date); // returns index of first initial

    ranNum = Math.floor(Math.random() * (letnum + monthIndex))  * ran; 
    if (ranNum === 0) {
        ranNum = Math.floor(Math.random() * 2) + 1
    }


    return ranNum;

}

app.post("/gen", async (req, res) => {

    let name = req.body.name;
    let date = req.body.birthMonth;

    let num = findPokemon(name, date);

    if(name === ""){
        res.redirect("/")

    } else {
    try {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/" + num + "/");
        res.render("display.ejs", { pokemon: result.data.name, pokemonImg: result.data.sprites.front_default, pokemonImgShiny: result.data.sprites.front_shiny });
    } catch (error) {
        console.log("fail")
        res.status(500);
    }

    }
    
})

app.get("/", async (req, res) => {
    res.render("index.ejs")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 