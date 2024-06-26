const express=require('express');
const app=express();

app.set('view engine','ejs');



app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });

let products = [];

app.get('/', (req, res) => {
  res.render('index', { products });
});

app.post('/', (req, res) => {
  const { product } = req.body;
  if (product) {
    products.push(product);
  }
  res.redirect('/');
});

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.post('/', (req, res) => {
    const { product } = req.body;
    if (product && product.trim() !== '') {
      products.push(product);
    }
    res.redirect('/');
  });

