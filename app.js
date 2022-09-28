const express = require("express");

const app = express();

app.use(express.static('public')); // Make everything inside of public/ available

app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

app.get("/", (req, res, next) => {
    console.log("this is the homepage");    
    // res.send("hello world");
    //res.sendFile(__dirname + '/views/index.html');
    res.render('index');
});


app.get("/contact", (req, res, next) => {
    //console.log("this is the contact page");
    //res.sendFile(__dirname + '/views/contact.html');
    res.render('contact');
});


app.get("/pizzas/margherita", (req, res, next) => {
    //res.sendFile(__dirname + '/views/pizza-margherita.html');
    const data = {
        title: 'Pizza Margherita',
        price: 8,
        imgFile: "pizza-margherita.jpg",
        ingredients: ['mozzarella', 'tomato', 'basil']

    }
    res.render('pizza-page', data);
});



app.get("/pizzas/carbonara", (req, res, next) => {
    const data = {
        title: 'Pizza Carbonara',
        price: 10,
        imgFile: "pizza-carbonara.jpg",
    }
    res.render('pizza-page', data);
});


app.get("/pizzas/funghi", (req, res, next) => {
    const data = {
        title: 'Pizza Funghi',
        imgFile: "pizza-funghi.jpg",
        ingredients: ['funghi', 'mozzarella', 'tomato', 'basil']
    }
    
    res.render('pizza-page', data);
});



app.listen(3001, () => console.log('My first app listening on port 3001! '));
