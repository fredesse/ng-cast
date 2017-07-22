angular.module('video-player')

.controller('AppCtrl', function(youTube) {
  var scope = this;

  this.searchResults = function(data) {
    scope.videos = data;
    scope.currentVideo = scope.videos[0];
  };

  this.selectVideo = function(video) {
    scope.currentVideo = video;
  };

  youTube.search('cute stuff', scope.searchResults);

})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
});