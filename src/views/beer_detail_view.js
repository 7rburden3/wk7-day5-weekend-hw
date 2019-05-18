const BeerDetailView = function(){

};

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer');

  const name = document.createElement('h2');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const tagline = document.createElement('h4');
  tagline.textContent = beer.tagline;
  beerDetail.appendChild(tagline);

  const beerImage = document.createElement('img');
  beerImage.src = beer.image_url;
  beerDetail.appendChild(beerImage);

  const description = document.createElement('p');
  description.textContent = beer.description;
  beerDetail.appendChild(description);

  const lineBreak = document.createElement('br');
  beerDetail.appendChild(lineBreak);
  beerDetail.appendChild(lineBreak);

  return beerDetail;
};

//BeerDetailView.prototype.createSideElement = function()

module.exports = BeerDetailView;
