var express = require('express'), app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', 'views');

app.get('/', function (request, response) {

    response.render('index', {title: 'Cupcake ipsum dolor sit'});
});

app.listen( process.env.IP | process.env.PORT);