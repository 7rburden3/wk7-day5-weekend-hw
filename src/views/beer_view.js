const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeerView = function(container){
  this.container = container;
};

BeerView.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.renderBeerDetailViews(event.detail);
  });
};

BeerView.prototype.renderBeerDetailViews = function(beers){
  //console.log(beers);
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    console.log(beerItem);
    console.log(beers);
    this.container.appendChild(beerItem);
  });
};

BeerView.prototype.createBeerListItem = function(beer){
  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  //console.log(beer);
  return beerDetail;
};

module.exports = BeerView;
