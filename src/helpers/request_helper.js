const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function(){
  return fetch(this.url)
    .then(response => response.json()) // this is implicitly returned
    .catch(err => console.log("Error in get:", err))
};

module.exports = RequestHelper;
