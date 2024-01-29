import express, { application } from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;
 
let bookSelect = 0;
let titles = [];

let reviews =[
   
];


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknotes",
    password: "Fu11St@ck",
    port: 5432,
  });
  db.connect();

  app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async(req,res) => {
    reviews =[];
    const result = await db.query("SELECT * FROM books ORDER BY id ASC");
        reviews= result.rows;
    res.render("main.ejs", {list:reviews});
})

app.get("/review", async(req,res) =>{
    res.render("review.ejs", {url:null, check:false})
});

app.post("/review", async(req,res) =>{
    const isbn = req.body.isbn;
    titles =[];
    if(isbn !== undefined){
        const result = await axios.get("https://openlibrary.org/search.json?title="+isbn+"&fields=title,cover_i&limit=5");
        for(var i = 0; i<5; i++){
            if(result.data.docs[i] !== undefined){
               titles.push(result.data.docs[i]); 
            }
        } 
        res.render("review.ejs", {url:titles, check:true})
    } 
});

app.post("/select", async(req, res) => {
    bookSelect = 0;
    let postSelect;
    for (var i = 0; i < 5; i++) {
        postSelect = req.body[i];
        if (!(typeof postSelect === 'undefined')) {
           bookSelect = i;
           console.log(bookSelect + titles[bookSelect].title)
           res.render("review.ejs", {url:titles[bookSelect].cover_i, check:false});
        }
    }
})

app.post("/post", async(req,res) =>{
let stars = 0;
let postEdit;
    for (var i = 0; i < titles.length; i++) {
        postEdit = req.body[i];
        console.log(postEdit)
        if (!(typeof postEdit === 'undefined')) {
           stars = i + 1;
            const review = req.body.newPost;
            console.log("working")
           await db.query(
            "INSERT INTO books (book,cover,review,starts) VALUES ($1,$2,$3,$4)",
            [titles[bookSelect].title, titles[bookSelect].cover_i,review,stars]
          );

           res.redirect("/");
        }
    }
});

app.post("/edit", async(req,res) =>{
    bookSelect = 0;
    let editSelect;
    for (var i = 1; i <= reviews.length; i++) {
        editSelect = req.body[i];
        console.log(editSelect);
        if (!(typeof editSelect === 'undefined')) {
           bookSelect = i - 1;
           res.render("edit.ejs", {edit:reviews, id:bookSelect});
        }
    }
});


app.post("/update", async(req,res) =>{
    let stars = 0;
    let postEdit = null;
        for (var i = 0; i <= 5; i++) {
            postEdit = req.body[i];
            console.log(postEdit)
            if (!(typeof postEdit === 'undefined')) {
               stars = i + 1;
                const review = req.body.newPost;
                console.log("updated")
               await db.query(
                "UPDATE books set review = ($1), starts = ($2) WHERE id = ($3)",
                [review,stars,bookSelect+1]
              );
           res.redirect("/");
            }
        }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  