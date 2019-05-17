const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function () {
  this.beersData = [];
  this.alcoholByVolume = [];
};

Beers.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (event) => {
    const abvIndex = event.detail;
    this.publishBeersByABV(abvIndex);
  });
};

Beers.prototype.getData = function () {
  const request = new RequestHelper('https://api.punkapi.com/v2/beers');
  request.get()
  .then((data) => {
    this.beersData = data;
    //console.log(data);
    PubSub.publish('Beers:beers-data-ready', this.beersData);
    this.publishABVs(data);
  });
};

Beers.prototype.publishABVs = function (data) {
  this.beersData = data;
  this.alcoholByVolume = this.uniqueABVList();
  PubSub.publish('Beers:abv-ready', this.alcoholByVolume);
};

Beers.prototype.abvList = function(){
  const fullList = this.beersData.map(beer => beer.abv);
  return fullList;
}

Beers.prototype.uniqueABVList = function(){
  return this.abvList().filter((beer, index, array) => {
    return array.indexOf(beer) === index;
  });
};

Beers.prototype.beersByABV = function (abvIndex){
  const selectedABV = this.alcoholByVolume[abvIndex];
  return this.beerData.filter((beer) => {
    return beer.abv === selectedABV;
  });
};

Beers.prototype.publishBeersByABV = function(abvIndex){
  const foundBeers = this.beersByABV(abvIndex);
  PubSub.publish('Beers:beers-ready', foundBeers);
};

module.exports = Beers;
