const Beers = require('./models/beers.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');
  const listContainer = document.querySelector('#beer');
  const beerView = new BeerView(listContainer);
  beerView.bindEvents();


  const beers = new Beers;
  //console.log(beers);
  beers.getData();
});
