const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:abv-ready', (event) => {
    // sort abv into ascending order
    this.populateSelect(event.detail.sort(function(a, b){return a-b}));
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function(alcoholByVolume){
  alcoholByVolume.forEach((abv, index) => {
  const option = this.createABVOption(abv, index);
  this.selectElement.appendChild(option);
});
};

SelectView.prototype.createABVOption = function(abv, index){
  const option = document.createElement('option');
  option.textContent = abv;
  option.value = index;
  return option;
};

module.exports = SelectView;
