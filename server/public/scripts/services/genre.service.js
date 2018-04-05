movieDatabaseApp.service('GenreService', ['$http',
function($http){
console.log('Sale service Loaded')
  let self = this;

  self.genre = {list: [] };
  //Link view to service data

  self.getGenre = function() {  
    console.log('called get sale!');
    $http.get('/genre').then(function (response){
       self.genre.list = response.data;
    })
  }

  self.addMovie = function (genre) {
    $http.post('/genre', genre).then( function (response){
      console.log('Genre succesfully posted');
      self.getGenre();
    }).catch ( function (error){ 
      console.log('error in POST', error);
    })
  };
       self.addGenre();
}]);