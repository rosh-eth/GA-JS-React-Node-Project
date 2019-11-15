const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.listen(3000, ()=>{
    console.log("I am listening");
});

const books = [
    {
        id: 1,
        name: 'Harry Potter'
    }, 
    {
        id: 2,
        name: 'Book 2'
    }
]


app.get('/first-route', (request, response) => {
    response.send('my first route');
})

app.get('/book/:id', (request, response) => {
    const findBook = books.find(book => book.id == request.params.id);
    response.render('book.ejs', {
        book: findBook
    })

})

app.get('/first-route/:id', (request, response) => {
    const findBook = books.find(book => book.id == request.params.id);
    // response.render('book.ejs', {
    //     title: 'Test Book'
    // })
    console.log(findBook);
    if (findBook) {
        response.send(findBook.name);
    } else {
        response.send('Book not found');
    }
    // response.send(request.params.id);
})

app.get('/', (request, response) => {
    response.render('sample.ejs');
})

app.get('/all', (request, response) => {
    response.render('all.ejs', {
        allBooks: books
    })
})
