const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');
const BeerView = require('./views/beer_view.js');

document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');
  const selectElement = document.querySelector('select#beer-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#beer');
  const beerView = new BeerView(listContainer);
  beerView.bindEvents();


  const beers = new Beers;
  beers.bindEvents();
  //console.log(beers);
  beers.getData();
});
