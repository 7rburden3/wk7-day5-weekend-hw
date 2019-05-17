const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:abv-ready', (event) => {
    this.populateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

module.exports = SelectView;
