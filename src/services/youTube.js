angular.module('video-player')
.service('youTube', function($http, $window){
  // TODO
  this.search = function(query, callback) {
    $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
        part:'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: $window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(function successCallback({data}) {
       // callback(null, data.items);
       callback(data.items);
     })
    .catch(function ({data}) {
      // callback(data.error);
      data.error.errors.forEach(function(err) {
        console.error(err);
      });
    });
  };
});