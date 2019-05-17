const BeerDetailView = function(){

};

BeerDetailView.prototype.createBeerDetail = function(beer){
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const tagline = document.createElement('p');
  tagline.textContent = beer.tagline;
  beerDetail.appendChild(tagline);

  const description = document.createElement('p');
  description.textContent = beer.description;
  beerDetail.appendChild(description);

  const beerImage = document.createElement('img');
  beerImage.src = beer.image_url;
  beerDetail.appendChild(beerImage);

  return beerDetail;
};

module.exports = BeerDetailView;
