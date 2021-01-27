const port = 3000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static('./src/static'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", '*');
    next();
})

app.get("/e-commerce", (req, res) => {
    const fields = {
        appName: 'e-commerce'
    }

    res.render('home', fields);
});


app.listen(port, () => {
    console.log(`poc e-commerce rodando na porta: ${port}`);
});

app.get('*', (req, res) =>
    res.render('notFound', {appName: 'SHOPPING LIST API'}));
